import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import ProfileNav from '../components/navigation/profileNav';

import DashBoard from '../components/dashboard';

import BottomNav from '../components/navigation/bottomNav';

// Animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class DiscoverPage extends Component {
  render() {
    return (
    	<ReactCSSTransitionGroup transitionName = "transition"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
  			<Header location={this.props.location}/>
        <ProfileNav location={this.props.location}/>
        <DashBoard location={this.props.location}/>
  			<BottomNav location={this.props.location}/>
    	</ReactCSSTransitionGroup>
    );
  }
}