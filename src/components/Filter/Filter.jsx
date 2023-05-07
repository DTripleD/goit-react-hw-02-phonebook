import { Component } from 'react';

class Filter extends Component {
  state = {
    filter: '',
  };

  render() {
    return (
      <label>
        Find contacts by name
        <input type="text" onInput={this.props.filter} />
      </label>
    );
  }
}

export default Filter;
