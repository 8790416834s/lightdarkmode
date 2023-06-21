// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode'}

  onLight = () => {
    this.setState({mode: 'Light Mode'})
  }

  onDark = () => {
    this.setState({mode: 'Dark Mode'})
  }

  render() {
    const {mode} = this.state

    return (
      <div className="container">
        {mode === 'Light Mode' ? (
          <div className="dark-container">
            <h1 className="dark-heading">Click To Change Mode</h1>
            <div>
              <button
                type="button"
                className="dark-button"
                onClick={this.onDark}
              >
                {mode}
              </button>
            </div>
          </div>
        ) : (
          <div className="light-container">
            <h1 className="light-heading">Click To Change Mode</h1>
            <div>
              <button
                type="button"
                className="light-button"
                onClick={this.onLight}
              >
                {mode}
              </button>
            </div>
          </div>
        )}
      </div>
    )
  }
}

export default LightDarkMode
