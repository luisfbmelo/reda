import React, { Component } from 'react';

export default class TextArea extends Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);

		this.state={
			currentLength:0,
			text: this.props.value || ""
		}
	}

	handleChange(e){
		// Check 	
		if ((e.target.value.length<=this.props.max) || !this.props.max){
			this.setState({
				currentLength: e.target.value.length,
				text: e.target.value
			});

			return true;
		}

		e.preventDefault();	

		return false;
	}

	render(){
		return (
			<div>
				<textarea {...this.props} onChange={this.handleChange} value={this.state.text}></textarea>
				<div className="row">
	                <div className="col-xs-6">
	                {(() => {
	                	if (this.props.max){
	                		return <span>{this.state.currentLength + "/" + this.props.max}</span>
	                	}
	                })()}
	                </div>
	                <div className="col-xs-6 text-right">
	                  <small>Deve ter no mínimo {this.props.min} caracteres e no máximo {this.props.max}</small>
	                </div>
	              </div>
            </div>)
	}
}