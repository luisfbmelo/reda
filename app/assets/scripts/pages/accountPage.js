import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import { AppBreadcrumbs } from '../components/common/breadcrumbs';
import BottomNav from '../components/navigation/bottomNav';

export default class DiscoverPage extends Component {
  render() {
    return (
    	<div>
  			<Header location={this.props.location}/>
  			<AppBreadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={true} />
  			"asd"
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}