import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import TopNav from '../../components/navigation/topNav';
import HighlightsContainer from '../highlights';
import SearchContainer from '../search';
import UserResume from '../user/resume';


class Header extends Component {
	constructor(props){
		super(props);
	}

	/* Get Page Type from LOCATION */
	headerType(location){
		location = location.length > 1 ? location.replace(/^\//, '') : location;		
		location = location.length > 1 && location.indexOf('/')>0 ? location.substring(0, location.indexOf('/')) : location;
		return (location === "/") ? "home-page" : location;
	}

	render() {
		var curPage = this.headerType(this.props.location.pathname);
		return (
			<div className={"header-container " + curPage}>
				<TopNav location={this.props.location} auth={this.props.auth}/>
				{(() => {
					// IS HOME
					if (curPage == "home-page" ){
						return[
							<HighlightsContainer key="highlights-container"/>,
							<div className="container" key="search-container">
								<SearchContainer key="search-container" searchTags={true}/>
							</div>
						]
					}
					
					// IS ACCOUNT
					if (curPage == "painel" || curPage == "perfil"){
						return <UserResume />
					}
					return null;
				})()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    auth: state.auth
});


export default connect(mapStateToProps)(Header);