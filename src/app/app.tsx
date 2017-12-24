import * as React from 'react';

/*
import { Hello, HowAreYou, Mood, TickTock, News, CountUp, SimpleReduxTester, SimpleReduxActTester, CompleteReactReduxTester } from '../components/';

const content = (
  <div id="container">
    <h2>Welcome to React with Typescript!</h2>
    <Hello />
    <HowAreYou mood={Mood.Happy} />
    <div id="timercontainer"><TickTock /></div>
    <News />
    <CountUp />
    <SimpleReduxTester />
    <SimpleReduxActTester />
    <CompleteReactReduxTester />
  </div>
);
*/

import { MySqlConnectionTest, MySqlSelectTest } from '../components/';

const content = (
  <div id="container">
    <h2>Welcome to MySQL with Typescript, React and Electron!</h2>
    <MySqlConnectionTest />
    <br />
    <MySqlSelectTest />
  </div>
);

export class App extends React.Component<undefined, undefined> {
  render() {
    return content;
  }
}
