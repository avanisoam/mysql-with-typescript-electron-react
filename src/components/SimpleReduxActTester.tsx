import * as React from 'react';
import * as actions from '../actions/';
import { store } from '../store';

export interface ComponentProperties {}

export interface ComponentState {
  counter: number;
}

class SimpleReduxActTester extends React.Component<
  ComponentProperties,
  ComponentState
> {
  constructor(props: ComponentProperties) {
    super(props);
    this.downClickedHandler = this.downClickedHandler.bind(this);
    this.upClickedHandler = this.upClickedHandler.bind(this);

    this.state = { counter: 0 };

    store.subscribe(() => {
      const newCount = store.getState().simple.simpleCounter;
      this.setState({ counter: newCount });
    });
  }

  upClickedHandler() {
    store.dispatch(actions.incrementSimple());
  }

  downClickedHandler() {
    store.dispatch(actions.decrementSimple());
  }

  render() {
    return (
      <div className='generalcomponent'>
         <button className='red-button' onClick={this.upClickedHandler}>Up</button>
         {' '}Redux-act: {this.state.counter}{' '}
          <button className='red-button' onClick={this.downClickedHandler}>Down</button>
      </div>
    );
  }
}

export default SimpleReduxActTester;
