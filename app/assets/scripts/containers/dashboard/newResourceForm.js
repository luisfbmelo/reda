import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFormats } from '../../actions/formats';
import { fetchAccess } from '../../actions/access';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomains } from '../../actions/domains';
import { fetchLanguages } from '../../actions/languages';
import { fetchYears } from '../../actions/years';
import { bindActionCreators } from 'redux';
import {reset} from 'redux-form';

import WizardFormFirstPage from '../../components/resources/newResource/newResourceFormFirstPage';
import WizardFormSecondPage from '../../components/resources/newResource/newResourceFormSecondPage';

class NewResourceFormContainer extends Component {
  constructor(props) {
    super(props)

    this.handleSubmit = this.handleSubmit.bind(this);

    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.state = {
      page: 2
    }
  }

  componentWillUnmount(){
    this.props.resetForm();
  }

  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  printFormBreadcrumbs(){
    if (this.state.page==1){
      return(
        <span><strong>Detalhes</strong> > Metadados</span>
      )
    }else if(this.state.page==2){
      return(
        <span>Detalhes > <strong>Metadados</strong></span>
      )
    }
  }

  handleSubmit(){
    console.log("submitting");
  }

  render() {
    const { page } = this.state
    return (
      <div className="new-resource">
        <header className="new-form-header text-center">
          <h1>Novo Recurso</h1>
          {this.printFormBreadcrumbs()}
        </header>
        <div className="new-resource__container">
          <section className="container">
            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} mapProps={this.props} />}
            {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.handleSubmit} mapProps={this.props} />}
          </section>
        </div>        
      </div>
    )
  }
}

NewResourceFormContainer.propTypes = {
}


function mapStateToProps(state) {
  return { 
    formats: state.formats,
    access: state.access,
    subjects: state.subjects,
    domains: state.domains,
    languages: state.languages,
    years: state.years
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
    fetchFormats,
    fetchAccess,
    fetchSubjects,
    fetchDomains,
    fetchLanguages,
    fetchYears,
    resetForm: () => dispatch(reset('newResource'))
  }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewResourceFormContainer);