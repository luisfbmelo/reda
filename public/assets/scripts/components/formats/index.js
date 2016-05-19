import React, { PropTypes } from 'react';
import { Component } from 'react';
import { FormatsList } from './list';

export default class FormatsBanner extends Component {
	constructor(props){
		super(props);

		this.onFilter = this.onFilter.bind(this);
	}

	componentDidMount(){
		this.props.fetchFormats();	
		this.props.fetchConfig();	
	}

	onFilter(selectedFormat){
		const { formats } = this.props;		

		let formatsToUse = [selectedFormat.id];

		if (formats.data && selectedFormat.type && selectedFormat.type == 'others'){
			formatsToUse.length = 0;

			for (let item of formats.data){
				if (item.type != 'others'){
					formatsToUse.push(item.id);
				};				
			}
		}

		this.props.searchResources({formats: formatsToUse})
		.then(() => {
			this.props.setFilters({formats: formatsToUse});
			this.context.router.push('/descobrir');
		})
	}

	render() {
		return (
			<div className="formats">
				<FormatsList formats={this.props.formats} onFilter={this.onFilter} config={this.props.config}/>
			</div>
		);
	}
}

FormatsBanner.propTypes = {
	formats: PropTypes.object.isRequired
}

FormatsBanner.contextTypes = {
  router: PropTypes.object
}