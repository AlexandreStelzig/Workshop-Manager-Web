import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class LabelEdit extends Component {
	constructor(props){
		super(props);
		this.state = {
			editing: false,
			text: props.text,
		}
	}

	labelClicked() {
	  	this.setState({ editing: true });
	}
	  
	textChanged() {
		this.setState({ text: this.refs.textInput.value});
	}
	  
	inputLostFocus() {
	  	this.setState({ editing: false });
	}
	  
	keyPressed(event) {
	  	if(event.key == 'Enter') {
	    	this.inputLostFocus();
	    }
	}
	  

	render(){
		if(this.state.editing){
				return <input 
	      	ref='textInput'
	        type='text'
	        onChange={this.textChanged.bind(this)}
	        onBlur={this.inputLostFocus.bind(this)}
	        onKeyPress={this.keyPressed.bind(this)}
	        value={this.state.text}
	        autoFocus
	     	/>;
		}
		else{
				return <p onClick={this.labelClicked.bind(this)}>
	     		{this.state.text}
	     		</p>;
		}	
	}
}


LabelEdit.propTypes = {
	text: PropTypes.string,
};

