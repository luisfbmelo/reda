import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import RadioGroup from '../../common/radioGroup';
import TextArea from '../../common/textarea';
import CheckboxGroup from 'react-checkbox-group';

export const fields = [ 
  'title',
  'author', 
  'email',
  'organization',
  'keywords',
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
  'year',
  'language',
  'op_proposal',
  'accept_terms'
]
// ^^ All fields on last form

const validate = values => {
  const errors = {}

  // Op Proposal
  if (!values.op_proposal) {
    errors.op_proposal = 'O campo é obrigatório'
  } else if (values.op_proposal.length < 20) {
    errors.op_proposal = 'Deve ter pelo menos 20 caracteres'
  } else if (values.op_proposal.length > 300) {
    errors.op_proposal = 'Apenas deve conter no máximo 300 caracteres'
  }

  return errors
}

class NewResourceFormSecondPage extends Component {
  constructor(props){
    super(props);

    this.renderSubjects = this.renderSubjects.bind(this);
    this.setSubject = this.setSubject.bind(this);
    this.setDomains = this.setDomains.bind(this);
    this.setYear = this.setYear.bind(this);

    this.domainsOfSubject = this.domainsOfSubject.bind(this);
  }


  componentDidMount(){
    this.props.mapProps.fetchSubjects();
    this.props.mapProps.fetchDomains();
    this.props.mapProps.fetchLanguages();
    this.props.mapProps.fetchYears();
  }

  // On change SUBJECTS
  setSubject(group){
    this.props.fields.subjects.onChange(group);
  }

  // On change YEARS
  setYear(year){
    this.props.fields.year.onChange(year);
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
                  {_.sortBy(this.props.mapProps.subjects.data, 'title').map((item,index) => {
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

  // Render domains by subjects
  renderDomains(){
    const { domains } = this.props.fields;
    const { subjects } = this.props.fields;

    // Get domains to present
    const totalDomains = _.sortBy(this.domainsOfSubject(), 'title');

    if (!totalDomains || totalDomains.length==0){
      return null;
    }

    return (
      <div className="row">
        <div className="col-xs-12">
          <label className="input-title">Domínios*</label>
          <div className={`form-group ${domains.touched && domains.invalid ? 'has-error' : ''}`}>
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
                            <div key={"domains-"+item.id} className="col-xs-6 col-sm-3">
                              <Checkbox value={item.id} id={"domains-"+item.id}/> 
                              <label htmlFor={"domains-"+item.id}>{item.title}</label>
                            </div>
                          )
                        })}
                      </div>
                    )
                  }
            </CheckboxGroup>
            {domains.touched && domains.error && <div className="text-danger">{domains.error}</div>}
          </div>
        </div>
      </div>
    )
  }

  // Check if domains are in any subject
  // DOMAINS MUST BE PROVIDED WITH THEIR SUBJECTS ASSOCIATED
  domainsOfSubject(){
    const { subjects } = this.props.fields;
    const { domains } = this.props.mapProps;

    // Make copy of domains to maintain immutable
    let domainsCopy = _.assign([], domains.data);

    // Are any subjects selected
    if (subjects.value){
      domainsCopy = _.filter(domainsCopy, (domain) => {
        let exists = false;

        // If domain subjects was selected
        for (let domainSubject of domain.subjects){
          exists = subjects.value.indexOf(domainSubject.id) >= 0;
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
      fields: { op_proposal, subjects, year, language },
      handleSubmit,
      previousPage,
      submitting
      } = this.props;

    const { mapProps } = this.props;

    if (!mapProps.subjects.data || !mapProps.domains.data || !mapProps.years.data || !mapProps.languages.data){
      return null;
    }

    return (<form onSubmit={handleSubmit}>
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
            <div className={`form-group ${subjects.touched && subjects.invalid ? 'has-error' : ''}`}>
              {this.renderSubjects()}
              {subjects.touched && subjects.error && <div className="text-danger">{subjects.error}</div>}
            </div>
          </div>
          
          {/* YEARS */}
          <div className="col-xs-12 col-sm-4">
            <label className="input-title">Anos*</label>
            <div className={`form-group ${year.touched && year.invalid ? 'has-error' : ''}`}>
              <RadioGroup list={mapProps.years.data} name="years" setRadio={this.setYear} checked={year.value}/>
              {year.touched && year.error && <div className="text-danger">{year.error}</div>}
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
              <TextArea max="300" min="20" className="form-control" placeholder="Indique como este recurso pode ser utilizado/operacionalizado" {...op_proposal} />
              {op_proposal.touched && op_proposal.error && <div className="text-danger">{op_proposal.error}</div>}
            </div>            
          </div>
        </div>

        <div>
          <button type="button" disabled={submitting} onClick={previousPage} className="cta primary outline">
            Anterior
          </button>
          <button type="submit" disabled={submitting} className="cta primary">
            {submitting ? <i/> : <i/>} Criar Recurso
          </button>
          <Link to="/painel" className="cta no-bg">Cancelar</Link>
        </div>
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

export default reduxForm({
  form: 'newResource',              // <------ same form name
  fields,                      // <------ all fields on last wizard page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(NewResourceFormSecondPage)