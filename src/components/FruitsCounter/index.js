// Write your code here
import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  incrementMango = () => {
    this.setState(prevMango => ({mango: prevMango.mango + 1}))
  }

  incrementBanana = () => {
    this.setState(prevBanana => ({banana: prevBanana.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bgContainer">
        <div className="container1">
          <h1 className="count-text ">
            Bob ate {mango} mangoes {banana} bananas
          </h1>
          <div className="container2">
            <div className="container3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                className="image"
                alt="mango"
              />
              <button
                className="button"
                type="button"
                onClick={this.incrementMango}
              >
                Eat Mango
              </button>
            </div>
            <div className="container3">
              <img
                src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                className="image"
                alt="banana"
              />
              <button
                className="button"
                type="button"
                onClick={this.incrementBanana}
              >
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
