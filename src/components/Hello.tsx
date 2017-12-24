/* tslint:disable:no-empty */
import * as React from 'react';
export interface ComponentProperties {}

export interface ComponentState {
  name: string;
}

class Hello extends React.Component<ComponentProperties, ComponentState> {
  constructor(props: ComponentProperties) {
    super(props);
    this.state = { name: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() { }

  componentWillUnmount() { }

  handleChange(e: React.FormEvent<HTMLInputElement>) {
    const inputValue = (e.target as HTMLInputElement).value;
    this.setState({ name: inputValue });
  }

  handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
  }

  render() {
    return (
      <div>
      <div className='baseHeader'>
        {!this.state.name ? 'Who are you ' : 'Hello ' + this.state.name}
      </div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Name:
            <input
              type='text'
              value={this.state.name}
              onChange={this.handleChange}
            />
          </label>
          <input type='submit' value='Submit' />
        </form>
      </div>
    );
  }
}

export default Hello;