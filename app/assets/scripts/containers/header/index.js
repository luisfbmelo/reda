import React from 'react';
import { Component } from 'react';
import TopNav from '../../components/navigation/topNav';
import HighlightsContainer from '../highlights';
import SearchContainer from '../search';


export default class Header extends Component {
	headerType(location){
		location = location.length > 1 ? location.replace(/^\//, '') : location;
		return (location === "/") ? "home-page" : location;
	}

	render() {
		var curPage = this.headerType(this.props.location.pathname);
		return (
			<div className={"header-container " + curPage}>
				<TopNav location={this.props.location} />
				{(() => {
					if (curPage == "home-page" ){
						return[
							<HighlightsContainer />,
							<SearchContainer />
						]
					}
					return null;
				})()}
			</div>
		);
	}
}