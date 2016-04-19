import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormats } from '../../actions/formats';
import { bindActionCreators } from 'redux';
import FormatsBanner from '../../components/formats';

function mapStateToProps(state) {
  return { formats: state.formats};
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchFormats }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FormatsBanner);