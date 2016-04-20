import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import ResourcesContainer from '../containers/resources';
import Breadcrumbs from '../components/common/breadcrumbs';


export default class DiscoverPage extends Component {
  render() {
    return (
    	<div>
			<Header location={this.props.location}/>
			<Breadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={true} />
			<ResourcesContainer />
      	</div>
    );
  }
}