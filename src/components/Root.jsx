import React from 'react';

class Root extends React.Component {
  constructor(props) {
    super(props);
    this.state = { test: '' };
  }

  changeText = (e) => {
    this.setState({ test: e.target.value });
  }

  render() {
    const {
      changeText,
      title
    } = this.props;

    const {
      test
    } = this.state;

    return (
      <>
        {title}
        <input value={title} onChange={e => changeText(e.target.value)} />
        <input value={test} onChange={this.changeText} />
      </>
    );
  }
}

export { Root };
