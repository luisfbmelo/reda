import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '../../actions/user';
import { fetchConfig } from '../../actions/config';
import { bindActionCreators } from 'redux';
import UserResume from '../../components/user/resume';

function mapStateToProps(state) {
  return { 
  	user: state.user,
  	auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchUserData }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserResume);