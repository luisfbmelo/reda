import React, { PropTypes } from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';
import { fetchYears } from '../../actions/years';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomains, fetchDomainsFromSubject } from '../../actions/domains';
import { fetchFormats } from '../../actions/formats';
import { searchResourcesFilters, setFilters } from '../../actions/filters';
import { bindActionCreators } from 'redux';
import SearchForm from '../../components/search/searchForm';


class SearchContainer extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }

  //
  //  Submit search form
  //
  onSubmit(filters){
    // Request new resources
    // Save filters for further use
    // Redirect to results page
    this.props.searchResourcesFilters(filters)
    .then(() => {
      this.props.setFilters(filters);
      this.context.router.push('/descobrir');     
    });
  }

	render() {
		return (
			<SearchForm {...this.props} onSubmit={this.onSubmit}/>
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
    fetchDomainsFromSubject,
    fetchFormats,
    setFilters,
    searchResourcesFilters
  }, dispatch);
}

SearchContainer.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchContainer);