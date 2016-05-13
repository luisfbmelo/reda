import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { removeAlert } from '../../actions/alerts';
import { bindActionCreators } from 'redux';
import AlertBox from '../../components/common/alerts';

function mapStateToProps(state) {
  return { 
  	alerts: state.alerts
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ removeAlert }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AlertBox);