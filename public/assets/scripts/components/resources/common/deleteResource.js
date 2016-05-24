import React from 'react';
import { Component, PropTypes } from 'react';

export default class DeleteResource extends Component{
	constructor(props){
		super(props);

		this.deleteEl = this.deleteEl.bind(this);
	}

	deleteEl(item){
		if (confirm('Tem a certeza que deseja remover?')){
			this.props.deleteResource(item)
			.then(this.props.cb);
		}		
	}

	render(){
		const { className, item } = this.props;

		return(
			<button className={className} onClick={() => this.deleteEl(item)}>{this.props.children}</button>
		)	
	}
	
}

DeleteResource.propTypes= {
    deleteResource: PropTypes.func.isRequired,
    cb: PropTypes.func.isRequired
}