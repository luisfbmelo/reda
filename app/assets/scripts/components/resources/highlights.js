import React from 'react';
import { Component } from 'react';
import { AppCarousel as HighlightsCarousel } from './carousel';

export default class ResourceHighlights extends Component {
	constructor(props){
		super(props);
	}

	componentDidMount(){
		this.props.fetchHighlights();		
	}

	render() {
		var settings = {
			interval: 5000,
			indicators: true,
			nextIcon: <i className="fa fa-chevron-right" aria-hidden="true"></i>,
			prevIcon: <i className="fa fa-chevron-left" aria-hidden="true"></i>
		}

		return (
			<HighlightsCarousel data={this.props.highlights} settings={settings}/>
		);
	}
}

ResourceHighlights.propTypes = {
	highlights: React.PropTypes.object.isRequired
}