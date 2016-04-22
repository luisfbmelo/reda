import React from 'react';
import { Component } from 'react';
import { FormatsList } from './list';

export default class FormatsBanner extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchFormats();		
	}

	render() {
		return (
			<div className="formats">
				<FormatsList formats={this.props.formats} />
			</div>
		);
	}
}

FormatsBanner.propTypes = {
	formats: React.PropTypes.object.isRequired
}