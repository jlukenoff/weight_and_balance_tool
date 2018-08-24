import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { ...props };
  }

  render() {
    return (
      <div>Hello from React</div>
    );
  }
}

window.App = App;
