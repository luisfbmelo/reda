import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUserData } from '@/actions/user';
import { fetchConfig } from '@/actions/config';
import { bindActionCreators } from 'redux';
import UserResume from '@/components/user/resume';

function mapStateToProps(state) {
  return { 
  	auth: state.auth,
  	config: state.config
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchUserData, fetchConfig }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(UserResume);