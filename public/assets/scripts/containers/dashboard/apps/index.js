import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { searchApps, resetApps } from '@/actions/apps';
import { fetchSystems, resetSystems } from '@/actions/systems';
import { bindActionCreators } from 'redux';
import AppsList from '@/components/dashboard/apps/list';

function mapStateToProps(state) {
  return { 
  	apps: state.apps,
  	auth: state.auth,
  	config: state.config,
  	systems: state.systems
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	searchApps,
    resetApps,
    fetchSystems,
    resetSystems
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppsList);