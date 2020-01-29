import React, { Component } from 'react';

import ExampleComponent, { RouterComponent } from 'hrl';

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <RouterComponent />
      </div>
    );
  }
}
