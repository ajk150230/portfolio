import React, { Component } from 'react';
import Header from './components/Header'
import Body from './components/Body'
import Projects from './components/Projects'
import Footer from './components/Footer'
import "./App.scss"

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Footer />
      </div>
    )
  }
}
