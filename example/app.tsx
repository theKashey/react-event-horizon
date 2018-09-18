import * as React from 'react';
import {Component} from 'react';
import {GHCorner} from 'react-gh-corner';
import {AppWrapper} from './styled';

import {EventHorizon} from "../src";

export interface AppState {
  counter: number;
}

const repoUrl = 'https://github.com/zzarcon/';
export default class App extends Component <{}, AppState> {
  state: AppState = {counter: 0}

  componentDidMount() {
    setInterval(() => this.setState(state => ({counter: state.counter + 1})), 100)
  }

  render() {
    return (
      <AppWrapper>
        <GHCorner openInNewTab href={repoUrl}/>
        <EventHorizon>
          <div>1</div>
          <div>2</div>
          ONE: {this.state.counter}
        </EventHorizon>
        <EventHorizon gen={Math.floor(this.state.counter/10)}>
          <div>1</div>
          <div>2</div>
          TWO :{this.state.counter}
        </EventHorizon>
        <EventHorizon gen={this.state}>
          <div>1</div>
          <div>2</div>
          THREE: {this.state.counter}
        </EventHorizon>
        REAL: {this.state.counter}
      </AppWrapper>
    )
  }
}