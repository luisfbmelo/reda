import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ContributeBlock from '@/components/blocks/contribute';

function mapStateToProps(state) {
  return { 
  	auth: state.auth
  };
}


export default connect(mapStateToProps, null)(ContributeBlock);