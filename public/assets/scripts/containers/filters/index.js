import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormats } from '../../actions/formats';
import { bindActionCreators } from 'redux';
import ResourcesFilters from '../../components/resources/common/filters';

function mapStateToProps(state) {
  return { formats: state.formats};
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchFormats }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourcesFilters);