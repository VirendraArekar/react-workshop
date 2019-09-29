// App.js

import React, { Component } from 'react';
import styled from 'styled-components'

const Blog = (props) => {
  return <h1 
          style={{ textAlign: 'center',color: 'skyBlue' }}>
          {props.title}
        </h1>
}

// const Blog = styled.h1`
//   text-align: center;
//   color: skyBlue;
// `;

class App extends Component {
  render() {
    return (
      <Blog title="AppDividend" />
    );
  }
}

export default App;