import React from 'react';
import { Component, PropTypes } from 'react';

export default class DeleteCollectiveResources extends Component{
	constructor(props){
		super(props);

		this.deleteList = this.deleteList.bind(this);
	}

	deleteList(items){
		if (confirm('Tem a certeza que deseja remover?')){
			this.props.deleteResources(items)
			.then(this.props.cb);
		}		
	}

	render(){
		const { className, items } = this.props;

		return(
			<button className={className} onClick={() => this.deleteList(items)}>{this.props.children}</button>
		)	
	}
	
}

DeleteCollectiveResources.propTypes= {
    deleteResources: PropTypes.func.isRequired,
    cb: PropTypes.func.isRequired
}