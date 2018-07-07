import React, { Component } from 'react'
import Header from './components/Header/'
import Overview from './components/Overview'

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Overview />
      </div>
    )
  }
}

export default App
