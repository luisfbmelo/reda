import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApps, searchApps, resetApps } from '@/actions/apps';
import { fetchConfig } from '@/actions/config';
import { getFilters, resetFilters, setFilters } from '@/actions/filters';
import { bindActionCreators } from 'redux';
import AppsListing from '@/components/apps';

function mapStateToProps(state) {
  return { 
  	apps: state.apps,
  	auth: state.auth,
  	config: state.config,
  	filters: state.filters
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchApps, 
  	fetchConfig, 
    setFilters,
    getFilters,
  	resetFilters,
    searchApps,
    resetApps
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppsListing);