import React, { Component } from 'react';
import Form from './components/Form';
import Header from './components/Header';
import Result from './components/Result';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Form />
        <Result />
      </div>
    );
  }
}

export default App;
