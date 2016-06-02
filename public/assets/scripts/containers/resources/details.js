import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { addAlert } from '@/actions/alerts';
import { fetchResource, resetResource, setFavorite, setHighlight } from '@/actions/resources';
import { fetchScripts, resetScripts } from '@/actions/scripts';
import { fetchComments, resetComments } from '@/actions/comments';
import { fetchConfig } from '@/actions/config';
import { bindActionCreators } from 'redux';
import ResourcesDetails from '@/components/resources/details';

function mapStateToProps(state) {
  return { 
  	resource: state.resource,
  	scripts: state.scripts,
    comments: state.comments,
  	auth: state.auth,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchResource, 
  	fetchConfig, 
  	fetchScripts,
    resetResource,
    resetScripts,
    resetComments,
    addAlert,
    setHighlight, 
    setFavorite
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ResourcesDetails);