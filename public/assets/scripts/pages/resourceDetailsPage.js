import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Helmet from "react-helmet";
import Header from '@/containers/header';
import { AppBreadcrumbs } from '@/components/common/breadcrumbs';
import SearchForm from '@/components/search/searchForm';
import SearchContainer from '@/containers/search';
import ResourceDetails from '@/containers/resources/details';
import BottomNav from '@/components/navigation/bottomNav';

class ResourceDetailsPage extends Component {
  render() {
    return (
    	<div>
        <Helmet
          title={this.props.resource.data ? this.props.resource.data.title : "Detalhes"}
          link={[
            {"rel": "canonical", "href": "http://localhost:3000/descobrir/detalhes-recurso"}
          ]}
        />
  			<Header location={this.props.location}/>
        <div className="resource-detail-search">
          <div className="container">
              <SearchContainer searchKeywords={false}/>
          </div>          
        </div>        
  			<AppBreadcrumbs routes={this.props.routes} params={this.props.params} setDocumentTitle={false} />
        <ResourceDetails params={this.props.params}/>
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}

function mapStateToProps(state) {
  return { 
    resource: state.resource
  };
}



export default connect(mapStateToProps)(ResourceDetailsPage);