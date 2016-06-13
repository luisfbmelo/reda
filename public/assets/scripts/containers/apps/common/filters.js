import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchCatApp, resetCategories } from '@/actions/categories';
import { fetchThemes, resetThemes } from '@/actions/themes';
import { getFiltersApps, resetFiltersApps, setFiltersApps } from '@/actions/filters';
import { bindActionCreators } from 'redux';
import AppsFilters from '@/components/apps/common/filters';

function mapStateToProps(state) {
  return { 
  	auth: state.auth,
    categories: state.categories,
    filtersApps: state.filtersApps,
    themes: state.themes
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
    setFiltersApps,
    getFiltersApps,
  	resetFiltersApps,
    fetchCatApp,
    resetCategories,
    fetchThemes,
    resetThemes
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(AppsFilters);