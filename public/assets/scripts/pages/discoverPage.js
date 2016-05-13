import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import ResourcesContainer from '../containers/resources';
import { AppBreadcrumbs } from '../components/common/breadcrumbs';
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
  			<AppBreadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={true} />
  			<ResourcesContainer location={this.props.location}/>
  			<BottomNav location={this.props.location}/>
    	</ReactCSSTransitionGroup>
    );
  }
}