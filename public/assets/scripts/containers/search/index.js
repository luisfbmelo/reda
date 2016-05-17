import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchYears } from '../../actions/years';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomains } from '../../actions/domains';
import { fetchFormats } from '../../actions/formats';
import { bindActionCreators } from 'redux';
import SearchForm from '../../components/search/searchForm';


class SearchContainer extends Component {
	render() {
		return (
			<SearchForm {...this.props} />
		);
	}
}

function mapStateToProps(state) {
  return { 
  	years: state.years,
  	subjects: state.subjects,
  	domains: state.domains,
    formats: state.formats
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
  	fetchYears,
  	fetchSubjects,
  	fetchDomains,
    fetchFormats
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);