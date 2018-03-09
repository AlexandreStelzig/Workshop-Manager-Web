import React, { Component } from 'react';
import PropTypes from 'prop-types';

class SimpleDropdown extends Component {
  render() {
    const itemsHTML = this.props.items.map(item => <option key={item.id} value={item.id}>{item.name}</option>);


    return (
      <select className="selectpicker form-control">{itemsHTML}</select>
    );
  }
}

SimpleDropdown.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
};

export default SimpleDropdown;
