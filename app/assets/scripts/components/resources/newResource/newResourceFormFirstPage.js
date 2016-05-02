import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';

// Components
import Tags from '../../common/tags';
import RadioGroup from '../../common/radioGroup';

export const fields = [ 
  'title',
  'author', 
  'email',
  'organization',
  'keywords',
  'format',
  'access',
  'techResources',
  'description',
  'exclusive'
]

const validate = values => {
  const errors = {}
  if (!values.title) {
    errors.title = 'O campo é obrigatório'
  } else if (values.title.length > 15) {
    errors.title = 'Must be 15 characters or less'
  }
  return errors
}

class NewResourceFormFirstPage extends Component {
  constructor(props){
    super(props);

    this.setTags = this.setTags.bind(this);
  }

  componentDidMount(){
    this.props.mapProps.fetchFormats();
  }

  setTags(tags){
    this.props.fields.keywords.onChange(tags);
  }

  render() {
    const {
      fields: { title, author, email, organization, keywords, format, access, techResources, description, exclusive },
      handleSubmit
    } = this.props;

    if (!this.props.mapProps.formats.data){
      return null;
    }
    const { formats } = this.props.mapProps;

    return (
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <h1>Detalhes</h1>
          </div> 

          <div className="col-xs-12 col-sm-6 switch-container text-right">
            <span>Reservado a docentes</span>
            <label className="switch">
              <input type="checkbox" {...exclusive}/>
              <div className="slider round"></div>
            </label>
          </div>       
        </div>

        {/* FIRST ROW */}
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <label className="input-title">Título*</label>
            <div className={`form-group ${title.touched && title.invalid ? 'has-error' : ''}`}>
              <input type="text" className="form-control" placeholder="Nome do seu recurso" {...title}/>
              {title.touched && title.error && <div className="text-danger">{title.error}</div>}
            </div>
          </div>

          <div className="col-xs-12 col-sm-3">
            <label className="input-title">Autor*</label>
            <div className={`form-group ${author.touched && author.invalid ? 'has-error' : ''}`}>
              <input type="text" className="form-control" placeholder="Nome do autor" {...author}/>
              {author.touched && author.error && <div className="text-danger">{author.error}</div>}
            </div>
          </div>           
        </div>

        {/* SECOND ROW */}
        <div className="row">
          <div className="col-xs-12 col-sm-3">
            <label className="input-title">Email*</label>
            <div className={`form-group ${email.touched && email.invalid ? 'has-error' : ''}`}>
              <input type="text" className="form-control" placeholder="Email do núcleo ou docente" {...email}/>
              {email.touched && email.error && <div className="text-danger">{email.error}</div>}
            </div>
          </div>
          <div className="col-xs-12 col-sm-3">
            <label className="input-title">Escola/Organização*</label>
            <div className={`form-group ${organization.touched && organization.invalid ? 'has-error' : ''}`}>
              <input type="text" className="form-control" placeholder="Nome da sua escola/organização" {...organization}/>
              {organization.touched && organization.error && <div className="text-danger">{organization.error}</div>}
            </div>
          </div>   
        </div>

        {/* THIRD ROW */}
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label className="input-title">Palavras-Chave*</label>
            <div className={`form-group ${keywords.touched && keywords.invalid ? 'has-error' : ''}`}>
              <Tags setTags={this.setTags} />
              {keywords.touched && keywords.error && <div className="text-danger">{keywords.error}</div>}
            </div>            
          </div>
        </div>

        {/* FORMATS */}
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label className="input-title">Formato*</label>
            <div className={`form-group ${format.touched && format.invalid ? 'has-error' : ''}`}>
              <RadioGroup list={formats.data} name="formats"/>
              {format.touched && format.error && <div className="text-danger">{format.error}</div>}
            </div>            
          </div>
        </div>

        {/* FOURTH ROW */}
        <div className="row">
          <div className="col-xs-12">
            <label className="input-title">Recursos Técnicos*</label>
            <div className={`form-group ${techResources.touched && techResources.invalid ? 'has-error' : ''}`}>
              <textarea className="form-control" placeholder="Nome do seu recurso" {...techResources}></textarea>
              {techResources.touched && techResources.error && <div className="text-danger">{techResources.error}</div>}
            </div>            
          </div>
        </div>

        {/* FIFTH ROW */}
        <div className="row">
          <div className="col-xs-12">
            <label className="input-title">Descrição*</label>
            <div className={`form-group ${description.touched && description.invalid ? 'has-error' : ''}`}>
              <textarea className="form-control" placeholder="Nome do seu recurso" {...description}></textarea>
              {description.touched && description.error && <div className="text-danger">{description.error}</div>}
            </div>            
          </div>
        </div>

        {/* NEXT */}
        <div>
          <button type="submit" className="cta primary">Continuar</button>
          <Link to="/painel">Cancelar</Link>
        </div>
      </form>
    )
  }
}

NewResourceFormFirstPage.propTypes = {
  fields: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

export default reduxForm({
  form: 'newResource',              // <------ same form name
  fields,                      // <------ only fields on this page
  destroyOnUnmount: false,     // <------ preserve form data
  validate                     // <------ only validates the fields on this page
})(NewResourceFormFirstPage)