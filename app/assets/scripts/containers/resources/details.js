import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResources, fetchResource } from '../../actions/resources';
import { fetchConfig } from '../../actions/config';
import { bindActionCreators } from 'redux';
import ResourcesDetails from '../../components/resources/details';

function mapStateToProps(state) {
  return { 
  	resource: state.resource,
  	auth: state.auth,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchResource, fetchConfig }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesDetails);