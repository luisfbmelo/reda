import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchComments } from '@/actions/comments';
import { bindActionCreators } from 'redux';
import ResourceComments from '@/components/resources/comments/list';

function mapStateToProps(state) {
  return { 
  	comments: state.comments,
  	auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchComments }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourceComments);