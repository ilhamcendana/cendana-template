import React from 'react';
import './App.css';
import { connect } from 'react-redux';

const App = ({ cendana }) => {
  return (
    <div className="App">
      <h1 style={{ textAlign: 'center', fontSize: 50 }}>{cendana}</h1>
    </div>
  );
}

const stateToProps = state => {
  return {
    cendana: state.test
  }
}

export default connect(stateToProps)(App);
