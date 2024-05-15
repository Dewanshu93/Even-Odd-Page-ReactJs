// Write your code here
import {Component} from 'react'
import './index.css'

class EvenOddApp extends Component {
  state = {randomNumber: 0}
  onIncrement = () => {
    let incrementNumber = Math.ceil(Math.random() * 100)
    this.setState(prevState => ({
      randomNumber: prevState.randomNumber + incrementNumber,
    }))
  }
  render() {
    const {randomNumber} = this.state
    return (
      <div className="outerContainer">
        <div className="mainContainer">
          <h1 className="head1">
            Count <span>{randomNumber} </span>
          </h1>
          {randomNumber%2===0 ? <p className="para1">Count is Even</p> : <p className="para1">Count is Odd</p>}
          <button className="btn1" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="para2">Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
