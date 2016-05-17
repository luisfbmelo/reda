import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormats } from '../../actions/formats';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomains } from '../../actions/domains';
import { fetchYears } from '../../actions/years';
import { fetchAccess } from '../../actions/access';
import { submitFilters } from '../../actions/filters';
import { bindActionCreators } from 'redux';
import ResourcesFilters from '../../components/resources/common/filters';

function mapStateToProps(state) {
  return { 
  	formats: state.formats,
  	subjects: state.subjects,
  	domains: state.domains,
    years: state.years,
    access: state.access,
    filters: state.filters
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchFormats,
  	fetchSubjects,
  	fetchDomains,
    fetchYears,
    fetchAccess,
    submitFilters
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourcesFilters);