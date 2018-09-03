import React, { Component } from 'react'
import Header from './components/Header/'
import { BrowserRouter } from 'react-router-dom'
import styled from 'styled-components'
import Routes from './Routes'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    )
  }
}

export default App
