import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchHighlights } from '../../actions/resources';
import { bindActionCreators } from 'redux';
import ResourceHighlights from '../../components/resources/highlights';

function mapStateToProps(state) {
  return { highlights: state.highlights};
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchHighlights }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourceHighlights);