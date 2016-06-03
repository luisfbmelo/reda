'use strict';

import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Link from 'react-router/lib/Link'
import _ from 'lodash';

// Components
import RadioGroup from '@/components/common/radioGroup';
import TextArea from '@/components/common/textarea';
import CheckboxGroup from 'react-checkbox-group';

// Validation
import validate from './validateSecondPage';

export const fields = [ 
  'title',
  'author', 
  'email',
  'organization',
  'tags',
  'format',
  'file',
  'embed',
  'duration',
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
  'accept_terms',
  'hasDomains'
]
// ^^ All fields on last form


class NewResourceFormSecondPage extends Component {
  constructor(props){
    super(props);

    //
    //  Renders
    //
    this.renderSubjects = this.renderSubjects.bind(this);
    this.renderYears = this.renderYears.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    
    //
    //  Event handlers
    //
    this.setSubject = this.setSubject.bind(this);
    this.setDomains = this.setDomains.bind(this);
    this.setYears = this.setYears.bind(this);
    this.setLanguage = this.setLanguage.bind(this);

    //
    //  Helpers
    //
    this.domainsOfSubject = this.domainsOfSubject.bind(this);
    this.hasDomains = this.hasDomains.bind(this);
  }


  componentDidMount(){
    this.props.mapProps.fetchLanguages();
    this.props.mapProps.fetchYears();
    this.props.mapProps.fetchTerms();

    this.props.mapProps.fetchSubjects();
    this.props.mapProps.fetchDomainsWithSubject();
  }

  // Check if has domain
  hasDomains(subjects){
    let totalDomains = this.domainsOfSubject(subjects);
    if (totalDomains && totalDomains.length>0){
      this.props.fields.hasDomains.onChange(true);
    }else{
      this.props.fields.hasDomains.onChange(false);
    }
  }

  // On change SUBJECTS
  setSubject(group){
    this.props.fields.domains.onChange([]);
    this.props.fields.subjects.onChange(group);

    // Are there any domains?
    this.hasDomains(group);
  }

  // On change YEARS
  setYears(group){
    this.props.fields.years.onChange(group);
  }

  // On change YEARS
  setDomains(group){
    this.props.fields.domains.onChange(group);
  }

  // On change LANGUAGES
  setLanguage(language){
    this.props.fields.language.onChange(language);
  }

  // Render subjects list
  renderSubjects(){
    const { subjects } = this.props.fields;
    return(
      <CheckboxGroup
            name="subjects"
            value={subjects.value}
            onChange={this.setSubject}
          >
            {
              Checkbox => (
                <div className="row">
                  {this.props.mapProps.subjects.data.map((item,index) => {
                    return (
                      <div key={"subject-"+item.id} className="col-xs-6">
                        <Checkbox value={item.id} id={"subject-"+item.id}/> 
                        <label htmlFor={"subject-"+item.id}>{item.title}</label>
                      </div>
                    )
                  })}
                </div>
              )
            }
      </CheckboxGroup>
    )
  }

  // Render subjects list
  renderYears(){
    const { years } = this.props.fields;
    return(
      <CheckboxGroup
            name="years"
            value={years.value}
            onChange={this.setYears}
          >
            {
              Checkbox => (
                <div className="row">
                  {this.props.mapProps.years.data.map((item,index) => {
                    return (
                      <div key={"year-"+item.id} className="col-xs-6">
                        <Checkbox value={item.id} id={"year-"+item.id}/> 
                        <label htmlFor={"year-"+item.id}>{item.title}</label>
                      </div>
                    )
                  })}
                </div>
              )
            }
      </CheckboxGroup>
    )
  }

  // Render domains by subjects
  renderDomains(){
    const { domains, subjects } = this.props.fields;

    // Get domains to present
    const totalDomains = this.domainsOfSubject();

    if ((!subjects.value || subjects.value.length==0) || !totalDomains || totalDomains.length==0){
      return null;
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          <label className="input-title">Domínios*</label>
          <div className={`form-group ${domains.touched && domains.invalid ? 'has-error' : ''}`}>

          {(() => {
            if (totalDomains && totalDomains.length>0){
              return(
                <CheckboxGroup
                      name="domains"
                      value={domains.value}
                      onChange={this.setDomains}
                    >
                      {
                        Checkbox => (
                          <div className="row">
                            {totalDomains.map((item,index) => {
                              return (
                                <div key={"domains-"+item.id} className="col-xs-6 col-sm-3 domains-selection">
                                  <Checkbox value={item.id} id={"domains-"+item.id}/> 
                                  <label htmlFor={"domains-"+item.id}>{item.title}</label>
                                </div>
                              )
                            })}
                          </div>
                        )
                      }
                </CheckboxGroup>
              )
            }
          })()}            
            {domains.touched && domains.error && <div className="text-danger">{domains.error}</div>}
          </div>
        </div>
      </div>
    )
  }

  // Check if domains are in any subject
  // DOMAINS MUST BE PROVIDED WITH THEIR SUBJECTS ASSOCIATED
  domainsOfSubject(givenSubjects){
    let subjects = givenSubjects || this.props.fields.subjects;

    const { domains } = this.props.mapProps;

    // Make copy of domains to maintain immutable
    let domainsCopy = _.assign([], domains.data);

    // Are any subjects selected
    if ((subjects && subjects instanceof Array && subjects.length>0) || (subjects.value && subjects.value.length>0)){
      domainsCopy = _.filter(domainsCopy, (domain) => {
        let exists = false;

        // If domain subjects was selected
        for (let domainSubject of domain.Subjects){
          exists = subjects.value ? subjects.value.indexOf(domainSubject.id) >= 0 : subjects.indexOf(domainSubject.id) >= 0;
        }

        return exists;
      });

      // Avoid returning duplicates
      return _.uniqBy(domainsCopy, 'title');
    }

    return null;
  }

  renderErrors(){
    const { errorMessage } = this.props.mapProps.resource;

    if (errorMessage && errorMessage.form_errors){
      return (
        <div class="alert alert-danger" role="alert">
          <ul>
            {errorMessage.form_errors.map(error => {
              return <li>{error}</li>
            })}
          </ul>
        </div>
      )
    }
  }

  render() {
    const {
      fields: { op_proposal, op_proposal_author, subjects, years, language, accept_terms, domains },
      handleSubmit,
      previousPage,
      submitting
      } = this.props;

    const { mapProps } = this.props;
    
    if (!mapProps.subjects.data || !mapProps.domains.data || !mapProps.years.data || !mapProps.languages.data || !mapProps.terms.data){
      return null;
    }
        
    return (
      <form onSubmit={handleSubmit} className="form second-page">
        {this.renderErrors()}  

        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h1>Metadados</h1>
          </div>       
        </div>

        {/* SUBJECTS, YEARS AND LANGUAGES */}
        <div className="row">
          {/* SUBJECTS */}
          <div className="col-xs-12 col-sm-4">
            <label className="input-title">Disciplinas*</label>
            <div className={`form-group ${subjects.touched && subjects.invalid ? 'has-error has-feedback' : ''}`}>
              {this.renderSubjects()}
              {subjects.touched && subjects.error && <div className="text-danger">{subjects.error}</div>}
            </div>
          </div>
          
          {/* YEARS */}
          <div className="col-xs-12 col-sm-4">
            <label className="input-title">Anos*</label>
            <div className={`form-group ${years.touched && years.invalid ? 'has-error' : ''}`}>
              {this.renderYears()}
              {years.touched && years.error && <div className="text-danger">{years.error}</div>}
            </div>
          </div>

          {/* LANGUAGES */}
          <div className="col-xs-12 col-sm-4">
            <label className="input-title">Idiomas*</label>
            <div className={`form-group ${language.touched && language.invalid ? 'has-error' : ''}`}>
              <RadioGroup list={mapProps.languages.data} name="languagess" setRadio={this.setLanguage} checked={language.value} singleCol={true}/>
              {language.touched && language.error && <div className="text-danger">{language.error}</div>}
            </div>
          </div>
        </div>

        {/* DOMAINS */}
        {this.renderDomains()}

        {/* OPERATION PROPOSAL */}
        <div className="row">
          <div className="col-xs-12">
            <label className="input-title">Proposta de Operacionalização*</label>
            <div className={`form-group ${op_proposal.touched && op_proposal.invalid ? 'has-error' : ''}`}>
              <TextArea maxLength={800} minLength={20} className="form-control" placeholder="Indique como este recurso pode ser utilizado/operacionalizado" field={op_proposal} />
              {op_proposal.touched && op_proposal.error && <div className="text-danger">{op_proposal.error}</div>}
            </div>            
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label className="input-title">Autor da proposta*</label>
            <div className={`form-group ${op_proposal_author.touched && op_proposal_author.invalid ? 'has-error' : ''}`}>
              <input type="text" className="form-control" placeholder="Autor da proposta" {...op_proposal_author}/>
              {op_proposal_author.touched && op_proposal_author.error && <div className="text-danger">{op_proposal_author.error}</div>}
            </div>
          </div>
        </div>

        {/* TERMS AND CONDITIONS */}
        <div className="row">
          <div className="col-xs-12">
            <h1>Termos e Condições</h1>
            <p dangerouslySetInnerHTML={{__html: mapProps.terms.data.acceptance}} />
            
            <div className="license">
              <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                <img alt="Licença Creative Commons" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" className="img-responsive"/>
              </a>
            </div>

            <div className="terms-conditions">
              <input type="checkbox" value="accept_terms" id="accept_terms" {...accept_terms}/> 
              <label htmlFor="accept_terms">Li e concordo com os “Termos e condições” de submissão.</label> 
              {accept_terms.touched && accept_terms.error && <div className="text-danger">{accept_terms.error}</div>}
            </div>
          </div>

        </div>

        <footer className="form-buttons">
          <button type="button" disabled={submitting} onClick={previousPage} className="cta primary outline">
            Anterior
          </button>
          <button type="submit" disabled={submitting} className="cta primary">
            {submitting ? <i className='fa fa-spinner fa-spin'></i> : ""} {mapProps.resource.data && mapProps.resource.data.id ? "Guardar Alterações" : "Criar Recurso"}
          </button>
          <button className="cta no-bg" onClick={() => this.context.router.goBack()} role="link">Cancelar</button>
        </footer>
      </form>
    )
  }
}

NewResourceFormSecondPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  previousPage: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

NewResourceFormSecondPage.contextTypes = {
  router: PropTypes.object
}

export default reduxForm({
  form: 'newResource',              // <------ same form name
  fields,                      // <------ all fields on last wizard page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(NewResourceFormSecondPage)