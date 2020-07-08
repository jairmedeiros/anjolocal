import './styles.scss';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HamburgerUtils from './utils';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: null,
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { active } = this.state;

    if (active) {
      this.setState({ active: null });
    } else {
      this.setState({ active: ' is-active' });
    }
  }

  render() {
    const { active } = this.state;
    const { animation } = this.props;

    return (
      <button
        className={`hamburger hamburger--${animation} $this.state.active${active}`}
        type="button"
        onClick={this.handleClick}
        aria-label="Menu"
        aria-expanded={active}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

Hamburger.propTypes = {
  animation: PropTypes.string.isRequired,
};

Hamburger.defaultProps = {};

export { Hamburger, HamburgerUtils };
