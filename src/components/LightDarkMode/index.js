// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: 'Light Mode'}

    onLight = () => {
      this.setState(prevState => ({mode: 'Light Mode'}))
    }

    onDark = () => {
      this.setState(prevState => ({mode: 'Dark Mode'}))
    }
  }

  render() {
      const { mode } = this.state
        let authButton;
        if (mode === 'Light Mode') {
            authButton =  (<div className="dark-container">
          <h1 className="dark-heading">Click To Change Mode</h1>
          <div>
            <button type="button" className="dark-button" onClick={this.onDark}>
              {mode}
            </button>
          </div>
        </div>)
        } else if (mode === 'Dark Mode') {
            authButton = (<div className="light-container">
        <h1 className="light-heading">Click To Change Mode</h1>
        <div>
          <button type="button" className="light-button" onClick={this.onLight}>
            {mode}
          </button>
        </div>
      </div>)
        }

    return <div className="container">{this.authButton}</div>
  }
}

export default LightDarkMode
