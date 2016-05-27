import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchFormats, resetFormats } from '@/actions/formats';
import { fetchSubjects, resetSubjects } from '@/actions/subjects';
import { fetchDomains, resetDomains } from '@/actions/domains';
import { fetchYears, resetYears } from '@/actions/years';
import { fetchAccess, resetAccess } from '@/actions/access';
import { setFilters, getFilters, resetFilters, searchResourcesFilters } from '@/actions/filters';
import { bindActionCreators } from 'redux';
import ResourcesFilters from '@/components/resources/common/filters';

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
    resetYears,
    resetDomains,
    resetFormats,
    resetYears,
    resetSubjects,
    resetAccess,
    setFilters,
    getFilters,
    resetFilters,
    searchResourcesFilters
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(ResourcesFilters);