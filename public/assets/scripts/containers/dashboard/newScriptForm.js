'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomains } from '../../actions/domains';
import { fetchYears } from '../../actions/years';
import { fetchTerms } from '../../actions/terms';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';

import FormBody from '../../components/scripts/newScriptForm';

class NewScriptFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount(){
    this.props.resetForm();
  }

  handleSubmit(){
    // MAKE SUBMITION
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve()
        
      }, 5000) // simulate server latency
    })

  }

  render() {
    return (
      <div className="new-resource">
        <header className="new-form-header text-center">
          <h1>Gerir Guiões</h1>
          <span>Recurso X > <strong>Guiões</strong></span>
        </header>
        <div className="new-resource__container">
          <section className="container">
            <FormBody onSubmit={this.handleSubmit} mapProps={this.props} />
          </section>
        </div>        
      </div>
    )
  }
}

NewScriptFormContainer.propTypes = {
}


function mapStateToProps(state) {
  return { 
    subjects: state.subjects,
    domains: state.domains,
    years: state.years,
    terms: state.terms
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
    fetchSubjects,
    fetchDomains,
    fetchYears,
    fetchTerms,
    resetForm: () => dispatch(reset('newScript'))
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewScriptFormContainer);