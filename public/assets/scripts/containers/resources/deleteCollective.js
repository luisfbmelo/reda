import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { deleteResources } from '../../actions/resources';
import { bindActionCreators } from 'redux';
import DeleteCollectiveResources from '../../components/resources/common/deleteCollective';

function mapStateToProps(state) {
  return { 
  	auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	deleteResources
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(DeleteCollectiveResources);