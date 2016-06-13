import React from 'react';
import { Component, PropTypes } from 'react';

export default class DeleteSingle extends Component{
	constructor(props){
		super(props);

		this.deleteEl = this.deleteEl.bind(this);
	}

	deleteEl(item){
		if (confirm('Tem a certeza que deseja remover?')){
			this.props.deleteSingle(item);
		}		
	}

	render(){
		const { className, item } = this.props;

		return(
			<button className={className} onClick={() => this.deleteEl(item)}>{this.props.children}</button>
		)	
	}
	
}

DeleteSingle.propTypes= {
    deleteSingle: PropTypes.func.isRequired
}