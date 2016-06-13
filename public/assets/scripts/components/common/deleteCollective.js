import React from 'react';
import { Component, PropTypes } from 'react';

export default class DeleteCollective extends Component{
	constructor(props){
		super(props);

		this.deleteList = this.deleteList.bind(this);
	}

	deleteList(items){
		if (confirm('Tem a certeza que deseja remover?')){
			this.props.deleteList(items);
		}		
	}

	render(){
		const { className, items } = this.props;

		return(
			<button className={className} onClick={() => this.deleteList(items)}>{this.props.children}</button>
		)	
	}
	
}

DeleteCollective.propTypes= {
    deleteList: PropTypes.func.isRequired
}