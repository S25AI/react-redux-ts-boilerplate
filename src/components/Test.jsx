import React from 'react';

export default class Test extends React.Component {
  constructor(props) {
    super(props);
    this.state = { a: 1 };
  }

  _handleChange = () => {
    console.log(666);
  }

  render() {
    const { a } = this.state;
    return <div onClick={this._handleChange}>{a}</div>;
  }
}
