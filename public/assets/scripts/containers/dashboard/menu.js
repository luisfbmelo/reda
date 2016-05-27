import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import DashboardMenu from '@/components/navigation/dashboardMenu';

function mapStateToProps(state) {
  return { 
  	auth: state.auth
  };
}


export default connect(mapStateToProps, null)(DashboardMenu);