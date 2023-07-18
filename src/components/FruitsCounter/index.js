// Write your code here
import {component} from 'react'
import './index.css'

class FruitsCounter extends component {
  //   render() {
  //     return <h1> kapil</h1>
  //   }
  state = {mango: 0, banana: 0}

  incrementMango = () => {
    this.setState(prevMango => ({mango: prevMango.mango + 1}))
  }

  incrementBanana = () => {
    this.setState(prevBanana => ({mango: prevBanana.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="">
        <h1 className="heading">
          Bob ate {mango} mangoes {banana} bananas
        </h1>
        <div>
          <div>
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
          <div>
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              className="image"
              alt="banana"
            />
            <button
              className="button"
              type="button"
              onClick={this.incrementMango}
            >
              Eat Banana
            </button>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
