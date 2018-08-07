import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SimpleDropdown from './SimpleDropdown';

export default class LabelEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      type: props.type,
    };
    this.labelClicked = this.labelClicked.bind(this);
    this.inputLostFocus = this.inputLostFocus.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  labelClicked() {
    this.setState({ editing: true });
  }

  inputLostFocus() {
    this.setState({ editing: false });
  }

  keyPressed(event) {
    if (event.key === 'Enter') {
      this.inputLostFocus();
    }
  }


  render() {
    let editingElement = '';
    if (this.state.editing) {
      switch (this.state.type) {
        case 'date':
          editingElement = (<input
            ref={(r) => { this.textInput = r; }}
            type="text"
            className="form-control"
            onChange={this.props.onValueChange}
            onBlur={this.inputLostFocus}
            onKeyPress={this.keyPressed}
            value={this.props.value}
            autoFocus
            name={this.props.name}
          />);
          break;
        case 'enum':
          editingElement = (<SimpleDropdown
            ref={(r) => { this.textInput = r; }}
            onChange={this.props.onValueChange}
            onBlur={this.inputLostFocus}
            onKeyPress={this.keyPressed}
            items={this.props.value}
            autoFocus
            name={this.props.name}
          />);
          break;
        default: // for the text
          editingElement = (<input
            ref={(r) => { this.textInput = r; }}
            type="text"
            className="form-control"
            onChange={this.props.onValueChange}
            onBlur={this.inputLostFocus}
            onKeyPress={this.keyPressed}
            value={this.props.value}
            autoFocus
            name={this.props.name}
          />);
          break;
      }
    } else {
      editingElement = (
        <div onClick={this.labelClicked}>
          {this.props.value}
        </div>);
    }
    return editingElement;
  }
}

LabelEdit.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
  onValueChange: PropTypes.func,
  name: PropTypes.string,
};

LabelEdit.defaultProps = {
  type: 'text',
  value: '',
  onValueChange: () => {},
  name: ''
};

