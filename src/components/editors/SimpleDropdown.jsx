import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleDropdown extends Component {
  render() {
    const itemsHTML = this.props.items.map(item => <option key={item.id} selected={item.id === this.props.value ? 'selected' : ''} value={item.id}>{item.name}</option>);


    return (
      <select onChange={this.props.onValueChange} name={this.props.name} className="selectpicker form-control">{itemsHTML}</select>
    );
  }
}

SimpleDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  onValueChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

SimpleDropdown.defaultProps = {
  onValueChange: () => {},
};

export default SimpleDropdown;
