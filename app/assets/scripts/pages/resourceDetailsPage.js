import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import { AppBreadcrumbs } from '../components/common/breadcrumbs';
import SearchForm from '../components/search/searchForm';
import ResourceDetails from '../containers/resources/details';
import BottomNav from '../components/navigation/bottomNav';


export default class ResourceDetailsPage extends Component {
  render() {
    return (
    	<div>
  			<Header location={this.props.location}/>
        <SearchForm />
  			<AppBreadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={true} />
        <ResourceDetails params={this.props.params}/>
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}