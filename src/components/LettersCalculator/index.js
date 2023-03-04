import {Component} from 'react'

import './index.css'

class LettersCalculator extends Component {
  state = {lettersCount: 0, inputValue: ''}

  onClickTheInput = event => {
    const {inputValue} = this.state
    const eventInputValue = event.target.value
    if (eventInputValue.length > inputValue.length) {
      this.setState(prevState => ({
        lettersCount: prevState.lettersCount + 1,
        inputValue: event.target.value,
      }))
    } else {
      this.setState(prevState => ({
        lettersCount: prevState.lettersCount - 1,
        inputValue: event.target.value,
      }))
    }
  }

  render() {
    const {lettersCount} = this.state
    return (
      <div className="divContainer">
        <div className="imageContainer">
          <img
            src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
            alt="letters calculator"
            className="image"
          />
        </div>
        <div className="inputContainer">
          <h1 className="heading">Calculate the Letters you enter</h1>
          <div>
            <label className="labelText" htmlFor="inputText">
              Enter the phrase
            </label>
            <br />
            <input
              type="text"
              placeholder="Enter the phrase"
              id="inputText"
              className="input"
              onChange={this.onClickTheInput}
            />
          </div>
          <p className="descriptionContainer">No.of letters: {lettersCount}</p>
        </div>
      </div>
    )
  }
}

export default LettersCalculator
