import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchResources } from '../../actions/resources';
import { bindActionCreators } from 'redux';
import ResourcesHandling from '../../components/resources/listing';

function mapStateToProps(state) {
  return { resources: state.resources};
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchResources }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourcesHandling);