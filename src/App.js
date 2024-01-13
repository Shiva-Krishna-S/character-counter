import {Component} from 'react'
import {v4} from 'uuid'
import './App.css'

// Replace your code here
class App extends Component {
  state = {userInputsList: [], userInput: ''}

  addUserInput = event => {
    event.preventDefault()
    const {userInput} = this.state
    if (userInput !== '') {
      const newItem = {id: v4(), userInput}
      this.setState(prevState => ({
        userInputsList: [...prevState.userInputsList, newItem],
        userInput: '',
      }))
    }
  }

  onChangeUserInput = event => {
    this.setState({userInput: event.target.value})
  }

  render() {
    const {userInputsList, userInput} = this.state
    const isUserInputsListEmpty = userInputsList.length === 0
    return (
      <div className="main-container">
        <div className="card-container">
          <div className="first-section">
            <h1 className="first-section-heading">
              Count the characters like a Boss...
            </h1>
            {isUserInputsListEmpty ? (
              <img
                src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
                alt="no user inputs"
                className="no-user-input-image"
              />
            ) : (
              <ul className="inputs-list-container">
                {userInputsList.map(eachItem => (
                  <li key={eachItem.id} className="list-item">
                    <p className="input-item">
                      {eachItem.userInput} : {eachItem.userInput.length}
                    </p>
                  </li>
                ))}
              </ul>
            )}
          </div>
          <div className="second-section">
            <h1 className="second-section-heading">Character Counter</h1>
            <form onSubmit={this.addUserInput} className="form-container">
              <input
                type="text"
                value={userInput}
                onChange={this.onChangeUserInput}
                placeholder="Enter the Characters here"
                className="input-element"
              />
              <button type="submit" className="add-button">
                Add
              </button>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default App
