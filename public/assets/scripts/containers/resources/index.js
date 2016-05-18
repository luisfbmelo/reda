import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResources, setHighlight, searchResources, resetResources } from '../../actions/resources';
import { fetchConfig } from '../../actions/config';
import { getFilters, resetFilters } from '../../actions/filters';
import { bindActionCreators } from 'redux';
import ResourcesListing from '../../components/resources/listing';

function mapStateToProps(state) {
  return { 
  	resources: state.resources,
  	auth: state.auth,
  	config: state.config,
  	filters: state.filters
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchResources, 
  	fetchConfig, 
  	setHighlight, 
  	resetFilters,
    searchResources,
    resetResources
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourcesListing);