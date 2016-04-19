import React from 'react';
import { Component } from 'react';
import TopNav from '../../components/navigation/topNav';
import HighlightsContainer from '../highlights';
import SearchContainer from '../search';


export default class Header extends Component {
	headerType(location){
		return (location !== "/") ? "home-page" : location;
	}

	render() {
		return (
			<div className={"header-container " + this.headerType(this.props.location)}>
				<TopNav location={this.props.location}/>
				<HighlightsContainer />
				<SearchContainer />
			</div>
		);
	}
}