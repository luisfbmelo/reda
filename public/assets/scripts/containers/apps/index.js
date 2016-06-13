import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchApps, searchApps, resetApps, deleteApps, deleteApp } from '@/actions/apps';
import { fetchCatApp, resetCategories } from '@/actions/categories';
import { fetchSystems, resetSystems } from '@/actions/systems';
import { fetchConfig } from '@/actions/config';
import { getFilters, resetFilters, setFilters } from '@/actions/filters';
import { bindActionCreators } from 'redux';
import AppsListing from '@/components/apps';

function mapStateToProps(state) {
  return { 
  	apps: state.apps,
  	auth: state.auth,
  	config: state.config,
  	filters: state.filters,
    systems: state.systems
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
    resetApps,
    deleteApps, 
    deleteApp,
    fetchSystems, 
    resetSystems
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppsListing);