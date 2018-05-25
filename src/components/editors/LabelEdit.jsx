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
  }

  labelClicked() {
    this.setState({ editing: true });
  }

  textChanged() {
    this.setState({ text: this.refs.textInput.value });
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
        case 'text':
          editingElement = (<input
            ref='textInput'
            type="text"
            className="form-control"
            onChange={this.textChanged.bind(this)}
            onBlur={this.inputLostFocus.bind(this)}
            onKeyPress={this.keyPressed.bind(this)}
            value={this.state.text}
            autoFocus
          />);
          break;
        default:
          editingElement = (<input
            ref='textInput'
            type="text"
            className="form-control"
            onChange={this.textChanged.bind(this)}
            onBlur={this.inputLostFocus.bind(this)}
            onKeyPress={this.keyPressed.bind(this)}
            value={this.state.text}
            autoFocus
          />);
          break;
      }
    } else {
      editingElement = (<p onClick={this.labelClicked.bind(this)}>
        {this.state.text}
      </p>);
    }
    return editingElement;
  }
}

LabelEdit.propTypes = {
  type: PropTypes.string,
  value: PropTypes.string,
};

