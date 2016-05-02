import React from 'react';
import { Component } from 'react';

// Containers
import HeaderContainer from '../containers/header';
import FormatsContainer from '../containers/formats';
import ExploreBlock from '../components/blocks/explore';
import RecentContainer from '../containers/resources/recent';
import ContributeBlock from '../components/blocks/contribute';
import BottomNav from '../components/navigation/bottomNav';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class IndexPage extends Component {
  render() {   
    return (
    	<ReactCSSTransitionGroup transitionName = "transition"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
	    	<HeaderContainer location={this.props.location} />
        <FormatsContainer />	
        <ExploreBlock />
        <RecentContainer />
        <ContributeBlock />
        <BottomNav location={this.props.location} />
    	</ReactCSSTransitionGroup>
    );
  }
}