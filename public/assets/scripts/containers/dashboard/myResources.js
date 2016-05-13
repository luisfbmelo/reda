import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResources, setHighlight } from '../../actions/resources';
import { bindActionCreators } from 'redux';
import MyResources from '../../components/dashboard/resources/myResources';

function mapStateToProps(state) {
  return { 
  	resources: state.resources,
  	auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchResources, setHighlight }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(MyResources);