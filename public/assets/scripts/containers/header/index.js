import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHeader } from '@/actions/headers';

// Components
import TopNav from '@/components/navigation/topNav';
import HighlightsContainer from '@/containers/highlights';
import SearchContainer from '@/containers/search';
import GenericHeader from './genericHeader';
import UserResume from '@/containers/user/resume';

import { bindActionCreators } from 'redux';


class Header extends Component {
	constructor(props){
		super(props);

		// Those that have white nav
		this.noWhiteNav = ['descobrir'];
	}

	componentDidMount(){
		this.props.fetchHeader(this.headerType(this.props.location.pathname)[1]);
	}

	/* Get Page Type from LOCATION */
	headerType(location){
		location = location.length > 1 ? location.replace(/^\//, '') : location;		
		location = location.length > 1 && location.indexOf('/')>0 ? location.substring(0, location.indexOf('/')) : location;
		
		// If is home, overwrite slash with HOME-PAGE
		location = (location === "/") ? "home-page" : location;

		// Has white nav
		let containerClass = this.noWhiteNav.indexOf(location)>=0 ? location : location + " white-nav";

		return [containerClass, location];
	}

	render() {
		// 0: container class, 1: real location
		const curPage = this.headerType(this.props.location.pathname);
		const { headers } = this.props;

		return (
			<div className={"header-container " + curPage[0]}>
				<TopNav location={this.props.location} auth={this.props.auth}/>
				{(() => {
					// IS HOME
					if (curPage[1] == "home-page"){
						return[
							<HighlightsContainer key="highlights-container"/>,
							<div className="container" key="search-container">
								<SearchContainer key="search-container" searchTags={true}/>
							</div>
						]
					}else					
					// IS ACCOUNT
					if (curPage[1] == "painel" || curPage[1] == "perfil"){
						return <UserResume />
					}else{
						return <GenericHeader page={curPage[1]} header={headers.data} />
					}
					return null;
				})()}
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
    auth: state.auth,
    headers: state.headers
});

const mapDispatchToProps = (dispatch) => { 
  return bindActionCreators({ 
  	fetchHeader
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(Header);