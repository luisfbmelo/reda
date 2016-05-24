'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';

// Alerts
import * as alertMessages from '../../actions/message-types';

// Components
import { fetchResource, submitResource, resetResource } from '../../actions/resources';
import { fetchFormats } from '../../actions/formats';
import { fetchAccess } from '../../actions/access';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomains, fetchDomainsWithSubject } from '../../actions/domains';
import { fetchLanguages } from '../../actions/languages';
import { fetchYears } from '../../actions/years';
import { fetchTerms } from '../../actions/terms';
import { addAlert } from '../../actions/alerts';
import { bindActionCreators } from 'redux';
import { reset, initialize } from 'redux-form';

import WizardFormFirstPage from '../../components/resources/newResource/newResourceFormFirstPage';
import WizardFormSecondPage from '../../components/resources/newResource/newResourceFormSecondPage';

class NewResourceFormContainer extends Component {
  constructor(props) {
    super(props)

    //
    //  Event handlers
    //
    this.handleSubmit = this.handleSubmit.bind(this);
    this.nextPage = this.nextPage.bind(this);
    this.previousPage = this.previousPage.bind(this);
    this.afterSubmit = this.afterSubmit.bind(this);

    //
    //  Helpers
    //
    this.initForm = this.initForm.bind(this);

    //
    // Set state
    // 
    this.state = {
      page: 1
    }
  }

  componentDidMount(){
    const { resource } = this.props.params;

    //
    //  If to edit, get resource
    //
    if (resource){
      this.props.fetchResource(resource)
      .then(() => {
        const { data } = this.props.resource;
        const { user } = this.props.auth.data;

        // If the owner is not current user and current is not admin, go back
        if (this.props.resource.errorMessage || (data.user_id!=user.id && user.role!='admin')){
          this.context.router.push('/painel');
        }else{
          this.initForm();
        }
      });
    }
  }

  // Reset form on leave
  componentWillUnmount(){
    this.props.resetForm();
    this.props.resetResource();
  }

  // Set next page
  nextPage() {
    this.setState({ page: this.state.page + 1 })
  }

  // Set previous page
  previousPage() {
    this.setState({ page: this.state.page - 1 })
  }

  // Print breadcrumbs
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

  //
  //  Submit form
  //
  handleSubmit(values, dispatch){

    const { resource } = this.props.params;

    // MAKE SUBMITION
    return new Promise((resolve, reject) => {

      return this.props.submitResource(values, resource)
      .then(() => {
        const { errorMessage } = this.props.resource;

        // Dispatch errors to form if any
        if (errorMessage && errorMessage.form_errors){
          reject(errorMessage.form_errors);
          this.props.addAlert(alertMessages.ALERT_RESOURCE_ADD_ERROR, alertMessages.ERROR);

          // Else, resolve form
          // Add alert of success
          // Redirect to panel
        }else{          
          resolve();  
          this.props.addAlert(!resource ? alertMessages.ALERT_RESOURCE_CREATE_SUCCESS : alertMessages.ALERT_RESOURCE_EDIT_SUCCESS, alertMessages.SUCCESS);
          this.context.router.push('/painel');   
        }

      })
      .catch(error => {
        reject(error);
        this.props.addAlert(error, alertMessages.ERROR);
      })
    })
  }

  afterSubmit(){

  }



  //
  //  INIT form after server fetch
  //
  initForm(){
    const { data } = this.props.resource;
    const fields = [ 
      'title',
      'author', 
      'email',
      'organization',
      'tags',
      'format',
      'file',
      'embed',
      'link',
      'access',
      'techResources',
      'description',
      'exclusive',
      'isOnline',
      'subjects',
      'domains',
      'years',
      'language',
      'op_proposal',
      'op_proposal_author',
      'hasDomains'
    ]

    let initValues = {
      title: data.title,
      author: data.author,
      email: data.email,
      organization: data.organization,
      tags: data.Tags.map(item => item.title),
      format: data.Format,
      file: data.Files && data.Files.length > 0 && data.Files[0],
      embed: data.embed,
      link: data.link,
      access: data.Modes.map(item => item.id),
      techResources: data.techResources,
      description: data.description,
      exclusive: data.exclusive,
      isOnline: !data.Files || data.Files.length == 0,
      subjects: data.Subjects.map(item => item.id),
      domains: data.Domains.map(item => item.id),
      years: data.Years.map(item => item.id),
      language: data.Languages && data.Languages.length > 0 && data.Languages[0],
      op_proposal: data.operation,
      op_proposal_author: data.operation_author,
      hasDomains: data.Domains && data.Domains.length > 0
    }

    this.props.initForm(initValues, fields);
  }

  render() {
    const { page } = this.state;
    const { resource } = this.props;

    return (
      <div className="new-resource">
        <header className="new-form-header text-center">
          <h1>{resource && resource.data ? resource.title : "Novo Recurso"}</h1>
          {this.printFormBreadcrumbs()}
        </header>
        <div className="new-resource__container">
          <section className="container">
            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} mapProps={this.props} />}
            {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.handleSubmit} mapProps={this.props} submitionErr={this.props.resource.errorMessage}/>}
          </section>
        </div>        
      </div>
    )
  }
}


function mapStateToProps(state) {
  return { 
    formats: state.formats,
    access: state.access,
    subjects: state.subjects,
    domains: state.domains,
    languages: state.languages,
    years: state.years,
    terms: state.terms,
    resource: state.resource,
    auth: state.auth
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
    fetchResource,
    fetchFormats,
    fetchAccess,
    fetchSubjects,
    fetchDomains,
    fetchDomainsWithSubject,
    fetchLanguages,
    fetchYears,
    fetchTerms,
    submitResource,
    resetResource,
    addAlert,
    resetForm: () => dispatch(reset('newResource')),
    initForm: (initValues, fields) => dispatch(initialize('newResource', initValues, fields))
  }, dispatch);
}

NewResourceFormContainer.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(NewResourceFormContainer);