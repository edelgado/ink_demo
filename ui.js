import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {render, Color} from 'ink';

class Counter extends Component {
  constructor() {
    super();

    this.state = {
      i: 0
    };
  }

  render() {
    return (
      <Color green>
    {this.state.i} tests passed
    </Color>
  );
  }

  componentDidMount() {
    const {delay} = this.props;
    this.timer = setInterval(() => {
      this.setState({
        i: this.state.i + 1
      });
    }, delay);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }
}

Counter.propTypes = {
  speed: PropTypes.number
};

Counter.defaultProps = {
  speed: 100
};

render(<Counter/>);
