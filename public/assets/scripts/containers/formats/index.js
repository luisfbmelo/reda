import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { searchResources } from '@/actions/resources';
import { fetchFormats } from '@/actions/formats';
import { fetchConfig } from '@/actions/config';
import { setFilters } from '@/actions/filters';
import { bindActionCreators } from 'redux';
import FormatsBanner from '@/components/formats';

function mapStateToProps(state) {
  return { 
  	formats: state.formats,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchFormats, 
  	fetchConfig,
  	searchResources, 
  	setFilters
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(FormatsBanner);