import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      editing: false,
      text: props.value,
      type: props.type,
    };
    this.labelClicked = this.labelClicked.bind(this);
    this.textChanged = this.textChanged.bind(this);
    this.inputLostFocus = this.inputLostFocus.bind(this);
    this.keyPressed = this.keyPressed.bind(this);
  }

  labelClicked() {
    this.setState({ editing: true });
  }

  textChanged() {
    this.setState({ text: this.textInput.value });
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
            onChange={this.textChanged}
            onBlur={this.inputLostFocus}
            onKeyPress={this.keyPressed}
            value={this.state.text}
            autoFocus
          />);
          break;
        default: // for the text
          editingElement = (<input
            ref={(r) => { this.textInput = r; }}
            type="text"
            className="form-control"
            onChange={this.textChanged}
            onBlur={this.inputLostFocus}
            onKeyPress={this.keyPressed}
            value={this.state.text}
            autoFocus
          />);
          break;
      }
    } else {
      editingElement = (
        <div onClick={this.labelClicked}>
          {this.state.text}
        </div>);
    }
    return editingElement;
  }
}

LabelEdit.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

LabelEdit.defaultProps = {
  type: 'text',
  value: '',
};

