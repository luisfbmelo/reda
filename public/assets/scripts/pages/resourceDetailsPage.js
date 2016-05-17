import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import { AppBreadcrumbs } from '../components/common/breadcrumbs';
import SearchForm from '../components/search/searchForm';
import SearchContainer from '../containers/search';
import ResourceDetails from '../containers/resources/details';
import BottomNav from '../components/navigation/bottomNav';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class ResourceDetailsPage extends Component {
  render() {
    return (
    	<ReactCSSTransitionGroup transitionName = "transition"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
  			<Header location={this.props.location}/>
        <div className="resource-detail-search">
          <div className="container">
              <SearchContainer searchKeywords={false}/>
          </div>          
        </div>        
  			<AppBreadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={true} />
        <ResourceDetails params={this.props.params}/>
  			<BottomNav location={this.props.location}/>
    	</ReactCSSTransitionGroup>
    );
  }
}