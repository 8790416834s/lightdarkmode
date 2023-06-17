// Write your code here
import {Component} from 'react'
import './index.css'

class LightDarkMode extends Component {
  state = {mode: "LightMode"}

    onLight = () => {
      this.setState(prevState => ({prevState.mode: prevState."LightMode"}))
    }

    onDark = () => {
      this.setState(prevState => ({prevState.mode: prevState."DarkMode"}))
    }
  }

  render() {  
      const { mode } = this.state

    return (
    <div className="container">
    {mode === "LightMode" ? (<div className="dark-container">
                <h1 className="dark-heading">Click To Change Mode</h1>
                <div>
                    <button type="button" className="dark-button" onClick={this.onDark}>
                    {mode}
                    </button>
                </div>
                </div>) : (<div className="light-container">
                <h1 className="light-heading">Click To Change Mode</h1>
                <div>
                <button type="button" className="light-button" onClick={this.onLight}>
                    {mode}
                </button>
                </div>
            </div>)}
    </div>
    )
  }
}

export default LightDarkMode
