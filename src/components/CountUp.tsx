import * as React from 'react';

export interface SelectionOption {
  name: string;
  value: number;
  isSelected: boolean;
}

export interface ComponentState {
  amount: SelectionOption;
  count: number;
}

export interface ComponentProperties {}

class CountUp extends React.Component<ComponentProperties, ComponentState> {
  constructor(props: ComponentProperties) {
    super(props);
    this.myarray = new Array<SelectionOption>();
    this.myarray.push({ name: 'One', value: 1, isSelected: true });
    this.myarray.push({ name: 'Two', value: 2, isSelected: false });
    this.myarray.push({ name: 'Five', value: 5, isSelected: false });

    this.state = { amount: this.myarray[0], count: 0 };
    this.countDownClickHandle = this.countDownClickHandle.bind(this);

    this.handleChange = this.handleChange.bind(this);
  }

  private myarray: Array<SelectionOption>;

  countUpClickHandle = () => {
    this.setState(prevState => ({
      count: prevState.count + this.state.amount.value
    }));
  }

  countDownClickHandle() {
    this.setState(prevState => ({
      count: prevState.count - this.state.amount.value
    }));
  }

  handleChange(e: React.ChangeEvent<HTMLSelectElement>) {
    const value = e.target.value;
    if (value === '1') {
      this.setState({ amount: this.myarray[0] });
    } else if (value === '2') {
      this.setState({ amount: this.myarray[1] });
    } else {
      this.setState({ amount: this.myarray[2] });
    }
  }

  getOption(isSelected: boolean, value: number, text: string): JSX.Element {
    return isSelected ? (
      <option key={value} value={value}>
        {text}
      </option>
    ) : (
      <option key={value}  value={value}>{text}</option>
    );
  }

  getSelectionOptions(): JSX.Element {
    const options = this.myarray.map(x => this.getOption(this.state.amount === x, x.value, x.name));
    return <select onChange={this.handleChange}>{options}</select>;
  }

  render() {
    return (
      <div className='generalcomponent'>
        <div>Count: {this.state.count} </div>
        <div>{this.getSelectionOptions()}</div>
        <div>
          <button className='red-button' onClick={this.countUpClickHandle}>
            Count up{' '}
          </button>{' '}
          or{' '}
          <button className='red-button' onClick={this.countDownClickHandle}>
            Count down
          </button>
        </div>
      </div>
    );
  }
}

export default CountUp;
