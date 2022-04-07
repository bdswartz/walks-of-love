import React, { Component } from 'react';

export default class App extends Component {
  state = {
    userData: null,
  };

  render() {
    return (
      <div className="nav_bar">
        <h1>This renders from the App.jsx file.</h1>
      </div>
    );
  }
}
