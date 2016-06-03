'use strict';

import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import Link from 'react-router/lib/Link'
import _ from 'lodash';

// Components
import RadioGroup from '@/components/common/radioGroup';
import TextArea from '@/components/common/textarea';
import Collapsible from '@/components/common/collapse';
import CheckboxGroup from 'react-checkbox-group';
import DomainsSelection from './common/domains';

// Validation
import validate from './validate';

export const fields = [ 
  'scripts[].id',
  'scripts[].title', 
  'scripts[].description',
  'scripts[].subjects',
  'scripts[].domains',
  'scripts[].years',
  'scripts[].op_proposal',
  'accept_terms',
  'scripts[].hasDomains'
]
// ^^ All fields on last form


class NewScriptForm extends Component {
  constructor(props){
    super(props);

    //
    //  Renders
    //
    this.renderSubjects = this.renderSubjects.bind(this);
    this.renderYears = this.renderYears.bind(this);

    //
    //  Event Handlers
    //
    this.setDomains = this.setDomains.bind(this);
    this.removeEl = this.removeEl.bind(this);

    //
    //  Helpers
    //
    this.domainsOfSubject = this.domainsOfSubject.bind(this);
    this.hasDomains = this.hasDomains.bind(this);
  }


  componentDidMount(){
    this.props.mapProps.fetchYears();
    this.props.mapProps.fetchTerms();

    this.props.mapProps.fetchSubjects();
    this.props.mapProps.fetchDomainsWithSubject();
  }

  // Delete script
  removeEl(formScripts, index){
    const { scripts, deleteScript } = this.props.mapProps;
    const { refreshScripts } = this.props;

    if (confirm('Tem a certeza que deseja eliminar este guião?')){
      formScripts.removeField(index);
      if (scripts.data.length>0 && scripts.data[index] && scripts.data[index].id){
        deleteScript(scripts.data[index].id)
        .then(() => refreshScripts())
      }      
    }    
  }

  // Check if has domain
  hasDomains(subjects, el){
    let totalDomains = this.domainsOfSubject(subjects);
    if (totalDomains && totalDomains.length>0){
      el.onChange(true);
    }else{
      el.onChange(false);
    }
  }

  // On change SUBJECTS
  setSubject(scriptIndex, group){   
    this.props.fields.scripts[scriptIndex].domains.onChange([]); 
    this.props.fields.scripts[scriptIndex].subjects.onChange(group);  

    // Are there any domains?
    this.hasDomains(group, this.props.fields.scripts[scriptIndex].hasDomains);
  }

  // On change YEARS
  setYears(scriptIndex, group){
    this.props.fields.scripts[scriptIndex].years.onChange(group);
  }

  // On change YEARS
  setDomains(scriptIndex, group){
    this.props.fields.scripts[scriptIndex].domains.onChange(group);
  }

  // Render subjects list
  renderSubjects(script, scriptIndex){
    return(
      <CheckboxGroup
            name={"subjects-checkbox-"+scriptIndex}
            value={script.subjects.value}
            onChange={this.setSubject.bind(this, scriptIndex)}
          >
            {
              Checkbox => (
                <div className="row">
                  {this.props.mapProps.subjects.data.map((item,index) => {
                    return (
                      <div key={"subject-" + scriptIndex + "-" +item.id} className="col-xs-6">
                        <Checkbox value={item.id} id={"subject-" + scriptIndex + "-" + item.id}/> 
                        <label htmlFor={"subject-" + scriptIndex + "-" +item.id}>{item.title}</label>
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
  renderYears(script, scriptIndex){
    return(
      <CheckboxGroup
            name={"years-checkbox-"+scriptIndex}
            value={script.years.value}
            onChange={this.setYears.bind(this, scriptIndex)}
          >
            {
              Checkbox => (
                <div className="row">
                  {this.props.mapProps.years.data.map((item,index) => {

                    return (
                      <div key={"year-" + scriptIndex + "-" +item.id} className="col-xs-6">
                        <Checkbox value={item.id} id={"year-" + scriptIndex + "-" + item.id}/> 
                        <label htmlFor={"year-" + scriptIndex + "-" +item.id}>{item.title}</label>
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
  renderDomains(script, scriptIndex){
    return (
      <DomainsSelection script={script} scriptIndex={scriptIndex} setDomains={this.setDomains} domains={this.props.mapProps.domains}/>
    )
  }

  // Check if domains are in any subject
  // DOMAINS MUST BE PROVIDED WITH THEIR SUBJECTS ASSOCIATED
  domainsOfSubject(givenSubjects){
    let subjects = givenSubjects;

    const { domains } = this.props.mapProps;

    // Make copy of domains to maintain immutable
    let domainsCopy = _.assign([], domains.data);

    // Are any subjects selected
    if ((subjects && subjects instanceof Array && subjects.length>0)){
      domainsCopy = _.filter(domainsCopy, (domain) => {
        let exists = false;

        // If domain subjects was selected
        for (let domainSubject of domain.Subjects){
          exists = subjects.indexOf(domainSubject.id) >= 0;
        }

        return exists;
      });

      // Avoid returning duplicates
      return _.uniqBy(domainsCopy, 'title');
    }

    return null;
  }


  render() {
    const {
      fields: { scripts, accept_terms },
      handleSubmit,
      previousPage,
      submitting
      } = this.props;

    const { mapProps } = this.props;
    
    if (!mapProps.subjects.data || !mapProps.domains.data || !mapProps.years.data || !mapProps.terms.data){
      return null;
    }
    
    return (
      <form onSubmit={handleSubmit} className="form script__form">

        {!scripts.length && <div className="alert alert-warning">Não existem guiões</div>}
        {scripts.map((script, index) =>
          <div key={index}>
            <Collapsible title={"Guião nº " + (index+1)} className="cta primary script__form--collapsible" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down" deleteEl={()=> this.removeEl(scripts, index)} deleteIcon="fa fa-trash-o" isOpen={true}>
              {/* DETAILS */}
              <section>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <h1>Detalhes</h1>
                  </div>       
                </div>

                {/* FIRST COL/ROW */}
                <div className="row">
                  <div className="col-xs-12 col-sm-12">
                    <label className="input-title">Título*</label>
                    <div className={`form-group ${script.title.touched && script.title.invalid ? 'has-error' : ''}`}>
                      <input type="text" className="form-control" placeholder="Nome do seu guião" {...script.title}/>
                      {script.title.touched && script.title.error && <div className="text-danger">{script.title.error}</div>}
                    </div>
                  </div> 
                </div>

                {/* DESCRIPTION */}
                <div className="row">
                  <div className="col-xs-12">
                    <label className="input-title">Descrição*</label>
                    <div className={`form-group ${script.description.touched && script.description.invalid ? 'has-error' : ''}`}>
                      <TextArea maxLength={300} minLength={20} className="form-control" placeholder="Descreva este guião sucintamente" field={script.description} />
                      {script.description.touched && script.description.error && <div className="text-danger">{script.description.error}</div>}
                    </div>            
                  </div>
                </div>
              </section>

              {/* META */}
              <section>
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <h1>Metadados</h1>
                  </div>       
                </div>

                {/* SUBJECTS, YEARS AND LANGUAGES */}
                <div className="row">
                  {/* SUBJECTS */}
                  <div className="col-xs-12 col-sm-6">
                    <label className="input-title">Disciplinas*</label>
                    <div className={`form-group ${script.subjects.touched && script.subjects.invalid ? 'has-error has-feedback' : ''}`}>
                      {this.renderSubjects(script,index)}
                      {script.subjects.touched && script.subjects.error && <div className="text-danger">{script.subjects.error}</div>}
                    </div>
                  </div>
                  
                  {/* YEARS */}
                  <div className="col-xs-12 col-sm-6">
                    <label className="input-title">Anos*</label>
                    <div className={`form-group ${script.years.touched && script.years.invalid ? 'has-error' : ''}`}>
                      {this.renderYears(script,index)}
                      {script.years.touched && script.years.error && <div className="text-danger">{script.years.error}</div>}
                    </div>
                  </div>
                </div>

                {/* DOMAINS */}
                {this.renderDomains(script,index)}

                {/* OPERATION PROPOSAL */}
                <div className="row">
                  <div className="col-xs-12">
                    <label className="input-title">Proposta de Operacionalização*</label>
                    <div className={`form-group ${script.op_proposal.touched && script.op_proposal.invalid ? 'has-error' : ''}`}>
                      <TextArea maxLength={800} minLength={20} className="form-control" placeholder="Indique como este recurso pode ser utilizado/operacionalizado" field={script.op_proposal}/>
                      {script.op_proposal.touched && script.op_proposal.error && <div className="text-danger">{script.op_proposal.error}</div>}
                    </div>            
                  </div>
                </div>
              </section>
            </Collapsible>
          </div>
        )}

        {/* ADD MORE*/}
        <button type="button" className="cta primary more-script" onClick={() => {
            scripts.addField()    
        }}><i className="fa fa-plus" /> Novo guião
        </button> 

        {/* TERMS AND CONDITIONS */}
        <section className="terms-conditions">          
          <div className="row">
            <div className="col-xs-12">
              <h1>Termos e Condições</h1>
              <p dangerouslySetInnerHTML={{__html: mapProps.terms.data.acceptance}} />
              
              <div className="license">
                <a rel="license" href="http://creativecommons.org/licenses/by-sa/4.0/">
                  <img alt="Licença Creative Commons" src="https://i.creativecommons.org/l/by-sa/4.0/88x31.png" className="img-responsive"/>
                </a>
              </div>

              <div className="buttons">
                <input type="checkbox" value="accept_terms" id="accept_terms" {...accept_terms}/> 
                <label htmlFor="accept_terms">Li e concordo com os “Termos e condições” de submissão.</label> 
                {accept_terms.touched && accept_terms.error && <div className="text-danger">{accept_terms.error}</div>}
              </div>
            </div>

          </div>
        </section>   

        <footer className="form-buttons">
          <button type="submit" disabled={submitting} className="cta primary">
            {submitting ? <i className='fa fa-spinner fa-spin'></i> : ""} Submeter Guiões
          </button>
          <button className="cta no-bg" onClick={() => this.context.router.goBack()} role="link">Cancelar</button>
        </footer>
      </form>
    )
  }
}

NewScriptForm.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

NewScriptForm.contextTypes = {
  router: PropTypes.object
}

export default reduxForm({
  form: 'newScript',              // <------ same form name
  fields,                      // <------ all fields on last wizard page
  validate                     // <------ only validates the fields on this page
})(NewScriptForm)