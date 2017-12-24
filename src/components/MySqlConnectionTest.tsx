/* tslint:disable:no-empty */
import * as React from 'react';
export interface ComponentProperties {}

export interface ComponentState {
  name: string;
  host: string;
  user: string;
  password: string;
}

class Hello extends React.Component<ComponentProperties, ComponentState> {
  constructor(props: ComponentProperties) {
    super(props);
    this.state = { name: 'local connection', host: 'localhost', user: '', password: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { }

  componentWillUnmount() { }

  
  handleChange(e: React.FormEvent<HTMLInputElement>) {
    console.log((e.target as HTMLInputElement).name);
    const inputNameValue = (e.target as HTMLInputElement).name === 'name' ? (e.target as HTMLInputElement).value : this.state.name;
    const inputHostValue = (e.target as HTMLInputElement).name === 'host' ? (e.target as HTMLInputElement).value : this.state.host;
    const inputUserValue = (e.target as HTMLInputElement).name === 'user' ? (e.target as HTMLInputElement).value : this.state.user;
    const inputPasswordValue = (e.target as HTMLInputElement).name === 'password' ? (e.target as HTMLInputElement).value : this.state.password;
    this.setState({ name: inputNameValue, host: inputHostValue, user: inputUserValue, password: inputPasswordValue });
  }
  
  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    var mysql = require('mysql');

    var con = mysql.createConnection({
      
      host: this.state.host,
      user: this.state.user,
      password: ""

    });
    
    con.connect(function(err:any) {
      if (err) throw err;
      console.log("Connected!");
      console.log(con);
    });
  }

  render() {
    return (
      <div>
      <div className='baseHeader'>
        {!this.state.name ? 'Enter mysql hostname ' : 'Hostname : ' + this.state.host}
      </div>
        <form onSubmit={this.handleSubmit}>
          
          <br/>
          <label>
            Host:
            <input
              name='host'
              type='text'
              value={this.state.host}
              onChange={this.handleChange}
            />
          </label>
          <br/>
          <br/>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Hello;