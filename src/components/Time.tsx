import * as React from 'react';

export interface ComponentProperties {}

export interface ComponentState {
  date: Date;
}

class TickTock extends React.Component<ComponentProperties, ComponentState> {
  timerID: NodeJS.Timer;

  constructor(props: ComponentProperties) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return <h2>It is {this.state.date.toLocaleTimeString()}.</h2>;
  }
}

export default TickTock;