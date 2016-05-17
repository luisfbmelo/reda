import React from 'react';
import { Component } from 'react';
import { FormatsList } from './list';

export default class FormatsBanner extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchFormats();	
		this.props.fetchConfig();	
	}

	render() {
		return (
			<div className="formats">
				<FormatsList formats={this.props.formats} config={this.props.config}/>
			</div>
		);
	}
}

FormatsBanner.propTypes = {
	formats: React.PropTypes.object.isRequired
}