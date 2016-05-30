import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchRecent, setHighlight, setFavorite } from '@/actions/resources';
import { fetchConfig } from '@/actions/config';
import { bindActionCreators } from 'redux';
import RecentResources from '@/components/resources/recent';

function mapStateToProps(state) {
  return { 
  	resources: state.resources,
  	auth: state.auth,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchRecent, 
  	fetchConfig,
  	setHighlight, 
    setFavorite,
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(RecentResources);