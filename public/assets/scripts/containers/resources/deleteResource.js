import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteResource } from '../../actions/resources';
import { bindActionCreators } from 'redux';
import DeleteResource from '../../components/resources/common/deleteResource';

function mapStateToProps(state) {
  return { 
  	auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	deleteResource
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteResource);