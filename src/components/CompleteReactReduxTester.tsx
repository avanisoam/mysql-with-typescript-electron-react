import { RootState } from '../reducers/';
import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions/';
import { store } from '../store';

export interface ComponentProperties {
  counter: number;
}

class CompleteReactReduxTester extends React.Component<ComponentProperties, {}> {
  constructor(props: ComponentProperties) {
    super(props);
    this.downClickedHandler = this.downClickedHandler.bind(this);
    this.upClickedHandler = this.upClickedHandler.bind(this);
  }

  upClickedHandler() {
    store.dispatch(actions.incrementReact());
  }

  downClickedHandler() {
    store.dispatch(actions.decrementReact());
  }

  render() {
    return (
      <div className='generalcomponent'>
         <button className='red-button' onClick={this.upClickedHandler}>Up</button>
         {' '}React connect to redux: {this.props.counter}{' '}
          <button className='red-button' onClick={this.downClickedHandler}>Down</button>
        </div>
    );
  }
}

function mapStateToProps(state: RootState): Partial<ComponentProperties> {
  return {
    counter: state.react.reactCounter
  };
}

export default connect<{}, {}, ComponentProperties>(mapStateToProps, {})(CompleteReactReduxTester) as React.ComponentClass<{}>;
