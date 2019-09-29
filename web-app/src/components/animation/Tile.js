// Tile.js

import React, { Component } from 'react';
import styled from 'styled-components';

const TileWrapper = styled.div`
  background: #fff;
  max-width: 500px;
  margin: 2rem auto;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  transform: ${props => `scale(${props.scale})`};
`;

export default class Tile extends Component {
  render() {
    const { scale } = this.props;
    return (
      <TileWrapper scale={scale}>
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">
                  React Motion Animation Tutorial
                </h5>
                <p className="card-text">
                    Simple React Animation Tutorial With An 
                </p>
            </div>
        </div>
      </TileWrapper>
    );
  }
}