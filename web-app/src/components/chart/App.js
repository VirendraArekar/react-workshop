import React, { Component } from 'react';

import BarChartComponent from './BarChartComponent';
import PieChartComponent from './PieChartComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1>BarChart</h1>
        <BarChartComponent/>
      <h1>PieChart</h1>
        <PieChartComponent/>
      </div>
    );
  }
}

export default App;