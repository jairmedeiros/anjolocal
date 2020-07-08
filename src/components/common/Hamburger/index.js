import './styles.scss';
import React, { Component } from 'react';

class Hamburger extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: '',
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    e.preventDefault();
    const { active } = this.state;

    if (active.length > 0) {
      this.setState({ active: '' });
    } else {
      this.setState({ active: ' is-active' });
    }
  }

  render() {
    const { active } = this.state;

    return (
      <button
        className={`hamburger hamburger--spring $this.state.active${active}`}
        type="button"
        onClick={this.handleClick}
      >
        <span className="hamburger-box">
          <span className="hamburger-inner" />
        </span>
      </button>
    );
  }
}

export default Hamburger;
