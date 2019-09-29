// App.js

import React, { Component } from 'react';
import { Motion, spring } from 'react-motion';


import Tile from './Tile';

const MotionTile = props => {
  return (
      <Motion
        defaultStyle={{ scale: 0.5 }}
        style={{ scale: spring(1, { stiffness: 170, damping: 26 }) }}
      >
        {interpolatedStyle => <Tile scale={interpolatedStyle.scale} {...props} />}
      </Motion>
  );
};

export default class App extends Component {
  render() {
    return (
      <div>
        <MotionTile />
        <MotionTile />
        <MotionTile />
      </div>
    );
  }
}