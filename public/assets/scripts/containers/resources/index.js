import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResources } from '../../actions/resources';
import { fetchConfig } from '../../actions/config';
import { bindActionCreators } from 'redux';
import ResourcesListing from '../../components/resources/listing';

function mapStateToProps(state) {
  return { 
  	resources: state.resources,
  	auth: state.auth,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchResources, fetchConfig }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourcesListing);