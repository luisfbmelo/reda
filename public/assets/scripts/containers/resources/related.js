import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRelatedResources } from '../../actions/resources';
import { bindActionCreators } from 'redux';
import RelatedResources from '../../components/resources/related';

function mapStateToProps(state) {
  return { 
  	relatedResources: state.relatedResources,
  	auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchRelatedResources }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(RelatedResources);