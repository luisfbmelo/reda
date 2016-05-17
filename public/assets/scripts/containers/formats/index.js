import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormats } from '../../actions/formats';
import { fetchConfig } from '../../actions/config';
import { bindActionCreators } from 'redux';
import FormatsBanner from '../../components/formats';

function mapStateToProps(state) {
  return { 
  	formats: state.formats,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchFormats, fetchConfig }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FormatsBanner);