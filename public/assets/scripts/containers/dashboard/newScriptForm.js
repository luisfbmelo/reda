'use strict';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchUserScripts, resetScripts, deleteScript, submitScripts } from '../../actions/scripts';
import { fetchResource, resetResource } from '../../actions/resources';
import { fetchSubjects } from '../../actions/subjects';
import { fetchDomainsWithSubject } from '../../actions/domains';
import { fetchYears } from '../../actions/years';
import { fetchTerms } from '../../actions/terms';
import { addAlert } from '../../actions/alerts';
import { bindActionCreators } from 'redux';
import { reset, initialize, destroy } from 'redux-form';

// Alerts
import * as alertMessages from '../../actions/message-types';

import FormBody from '../../components/scripts/newScriptForm';

class NewScriptFormContainer extends Component {
  constructor(props) {
    super(props)

    //
    //  Event handlers
    //
    this.handleSubmit = this.handleSubmit.bind(this);
    this.getNewScripts = this.getNewScripts.bind(this);

    //
    //  Helpers
    //
    this.initScripts = this.initScripts.bind(this);
  }

  componentDidMount(){
    const { resource } = this.props.params;
    const { fetchUserScripts } = this.props;

    //
    //  If to edit, get resource
    //
    if (resource){
      this.props.fetchResource(resource)
      .then(() => fetchUserScripts(this.props.resource.data.id))    
      .then(() => {
        const { user } = this.props.auth.data;
        const { scripts } = this.props;

        // If errors, go back
        if (scripts.errorMessage){
          this.context.router.push('/painel');
        }else{          
          this.initScripts();
        }
      });
    }
  }

  // On exit, reset states
  componentWillUnmount(){
    this.props.resetForm();
    this.props.destroy();
    this.props.resetScripts();
    this.props.resetResource();
  }

  //
  //  Script submition
  //
  handleSubmit(values, dispatch){
    const { resource } = this.props;

    // MAKE SUBMITION
    return new Promise((resolve, reject) => {

      return this.props.submitScripts(values, resource.data.id)
      .then(() => {
        console.log(values);
        const { errorMessage } = this.props.scripts;


        // Dispatch errors to form if any
        if (errorMessage && errorMessage.form_errors){
          reject(errorMessage.form_errors);
          this.props.addAlert(alertMessages.ALERT_SCRIPT_MANAGE_ERROR, alertMessages.ERROR);

          // Else, resolve form
          // Add alert of success
          // Redirect to panel
        }else{          
          resolve();  
          this.props.addAlert(alertMessages.ALERT_SCRIPT_MANAGE_SUCCESS, alertMessages.SUCCESS);
          this.context.router.push('/painel');   
        }

      })
      .catch(error => {
        reject(error);
        this.props.addAlert(error, alertMessages.ERROR);
      })
    })
  }

  //
  //  Refresh scripts
  //
  getNewScripts(){
    const { fetchUserScripts, resource } = this.props;

    // Refresh only if there was any data before
    resource.data && fetchUserScripts(resource.data.id)
  }

  //
  //  INIT form after server fetch
  //
  initScripts(){
    const { data } = this.props.scripts;

    let initValues = { scripts:[] };

    const fields = [ 
      'scripts[].id',
      'scripts[].title', 
      'scripts[].email',
      'scripts[].organization',
      'scripts[].author',
      'scripts[].description',
      'scripts[].subjects',
      'scripts[].domains',
      'scripts[].years',
      'scripts[].op_proposal',
      'scripts[].op_proposal_author',
      'scripts[].hasDomains'
    ]

    if (data && data.length>0){
      for(let script of data){
        initValues.scripts.push({
          id: script.id || null,
          title: script.title,
          email: script.email,
          organization: script.organization,
          author: script.author,
          description: script.description,
          subjects: script.Subjects.map(item => item.id),
          domains: script.Domains.map(item => item.id),
          years: script.Years.map(item => item.id),
          op_proposal: script.operation,
          op_proposal_author: script.operation_author,
          hasDomains: script.Domains && script.Domains.length>0
        })
      }
      this.props.initScripts(initValues, fields);      
    }    
  }

  render() {
    return (
      <div className="new-resource">
        <header className="new-form-header text-center">
          <h1>Gerir Guiões</h1>
          <span>{this.props.resource.data && this.props.resource.data.title} > <strong>Guiões</strong></span>
        </header>
        <div className="new-resource__container">
          <section className="container">
            <FormBody onSubmit={this.handleSubmit} mapProps={this.props} refreshScripts={this.getNewScripts}/>
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
    terms: state.terms,
    scripts: state.scripts,
    auth: state.auth,
    resource: state.resource
  };
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ 
    fetchResource,
    fetchSubjects,
    fetchDomainsWithSubject,
    fetchYears,
    fetchTerms,
    fetchUserScripts,
    resetResource,
    resetScripts,
    deleteScript,
    submitScripts,
    addAlert,
    resetForm: () => dispatch(reset('newScript')),
    destroy: () => dispatch(destroy('newScript')),
    initScripts: (initValues, fields) => dispatch(initialize('newScript', initValues, fields))
  }, dispatch);
}

NewScriptFormContainer.contextTypes = {
  router: PropTypes.object
}

export default connect(mapStateToProps, mapDispatchToProps)(NewScriptFormContainer);