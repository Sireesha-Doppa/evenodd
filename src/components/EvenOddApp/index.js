import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {count: 0}

  generateNumber = () => {
    this.setState(prevState => ({
      count: prevState.count + Math.ceil(Math.random() * 100),
    }))
  }

  render() {
    const {count} = this.state
    const text = count % 2 === 0 ? 'Even' : 'Odd'
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading"> Count {count}</h1>
          <h1 className="heading1">Count is {text}</h1>
          <button className="increment-button" onClick={this.generateNumber}>
            Increment
          </button>
          <p className="paragraph">
            *Increase By Random Number Between 0 to 100
          </p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
