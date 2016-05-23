'use strict';

import React, { Component, PropTypes } from 'react';
import { reduxForm } from 'redux-form';
import { Link } from 'react-router';
import _ from 'lodash';

// Components
import Tags from '../../common/tags';
import RadioGroup from '../../common/radioGroup';
import FileInput from '../../common/fileInput';
import TextArea from '../../common/textarea';
import CheckboxGroup from 'react-checkbox-group';

// Validation
import validate from './validateFirstPage';

export const fields = [ 
  'title',
  'author', 
  'email',
  'organization',
  'tags',
  'format',
  'file',
  'embed',
  'link',
  'duration',
  'access',
  'techResources',
  'description',
  'exclusive',
  'isOnline'
]


/**
 * FORM FIRST PAGE
 */
class NewResourceFormFirstPage extends Component {
  constructor(props){
    super(props);

    //
    //  Renders
    //
    this.renderAccess = this.renderAccess.bind(this);

    //
    //  Event handlers
    //
    this.setTags = this.setTags.bind(this);
    this.setFormat = this.setFormat.bind(this);
    this.setAccess = this.setAccess.bind(this);
    this.setFile = this.setFile.bind(this);
    this.onlineChange = this.onlineChange.bind(this);
  }

  componentDidMount(){
    this.props.mapProps.fetchFormats();
    this.props.mapProps.fetchAccess()
    .then(() => {
      // Set default to downloadable
      _.forEach(this.props.mapProps.access.data, (mode) =>{    
        mode.title=="Descarregável" && this.props.fields.access.onChange([mode.id]);
      })
    })
  }

  // On change TAGS
  setTags(tags){
    this.props.fields.tags.onChange(tags);
  }

  // On change FORMATS
  setFormat(format){
    this.props.fields.format.onChange(format);

    // Set access mode
    _.forEach(this.props.mapProps.access.data, (mode) =>{    
      // If video, is online
      if (format.type=="video" && mode.title=="Online"){
        this.props.fields.access.onChange([mode.id]);
      // If not, and if resource is not online, set to downloadable
      }else if (format.type!="video" && !this.props.fields.isOnline.value && mode.title=="Descarregável"){
        this.props.fields.access.onChange([mode.id]);          
      }
    })
    
  }

  // On change FORMATS
  setAccess(access){
    this.props.fields.access.onChange(access);
  }

  // On change FILE
  setFile(file){
    this.props.fields.file.onChange(file);
  }

  // On change FILE
  onlineChange(e){
    const { isOnline, format } = this.props.fields;

    this.props.fields.isOnline.onChange(e);

    // Set access mode based on resource location
    if (this.props.mapProps.access && this.props.mapProps.access.data!=null){      
      _.forEach(this.props.mapProps.access.data, (mode) =>{    
        // If is online and this mode is online
        if (isOnline.value && mode.title=="Online"){
          this.props.fields.access.onChange([mode.id]);
        // If is not online and is a file, set to downloadable
        }else if (!isOnline.value && mode.title=="Descarregável"){
          this.props.fields.access.onChange([mode.id]);          
        }
      })
    }
  }

  // Render access modes
  renderAccess(){
    const { access } = this.props.fields;
    return(
      <CheckboxGroup
            name="access"
            value={access.value}
            onChange={this.setAccess}
          >
            {
              Checkbox => (
                <div className="row">
                  {_.sortBy(this.props.mapProps.access.data, 'title').map((item,index) => {
                    return (
                      <div key={"access-"+item.id} className="col-xs-6">
                        <Checkbox value={item.id} id={"access-"+item.id}/> 
                        <label htmlFor={"access-"+item.id}>{item.title}</label>
                      </div>
                    )
                  })}
                </div>
              )
            }
      </CheckboxGroup>
    )
  }

  render() {
    const {
      fields: { 
        title, 
        author, 
        email, 
        organization, 
        tags, 
        file, 
        link, 
        embed, 
        duration, 
        format, 
        access, 
        techResources, 
        description, 
        exclusive, 
        isOnline 
      },
      handleSubmit
    } = this.props;

    if (!this.props.mapProps.formats.data || !this.props.mapProps.access.data){
      return null;
    }
    
    const { formats } = this.props.mapProps;
    //console.log(file);
    return (
      <form onSubmit={handleSubmit} encType="multipart/form-data" className="form first-page">
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
            <div className={`form-group ${tags.touched && tags.invalid ? 'has-error' : ''}`}>
              <Tags setTags={this.setTags} tags={tags.value} placeholder="Palavras-chave"/>
              {tags.touched && tags.error && <div className="text-danger">{tags.error}</div>}
              <small>Deve escolher entre 1 e 5 palavras</small>
            </div>            
          </div>
        </div>

        {/* FORMATS */}
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label className="input-title">Formato*</label>
            <div className={`form-group ${format.touched && format.invalid ? 'has-error' : ''}`}>
              <RadioGroup list={formats.data} name="formats" setRadio={this.setFormat} checked={format.value}/>
              {format.touched && format.error && <div className="text-danger">{format.error}</div>}
            </div>            
          </div>
        </div>

        {/* VIDEO DURATION IF SO */}
        {(() => {
            if(format.value.type=='video'){
              return(
                <div className="row">
                  <div className="col-xs-12 col-sm-6">
                    <label className="input-title">Duração do vídeo*</label>
                    <div className={`form-group ${duration.touched && duration.invalid ? 'has-error' : ''}`}>
                      <input type="text" className="form-control" name="video-duration" placeholder="ex: 01:02:00s" {...duration} />
                      {duration.touched && duration.error && <div className="text-danger">{duration.error}</div>}
                    </div>            
                  </div>
                </div>
              )
            }
          })()}

        {/* File */}
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label className="input-title">Localização do recurso*</label>
              {/* ONLINE CHECKBOX */}
              {(() => {
                if(format.value.type!='video'){
                  return(
                    <div>
                      <input type="checkbox" value="isOnline" id="isOnline" {...isOnline} onChange={this.onlineChange}/> 
                      <label htmlFor="isOnline">Recurso encontra-se online</label>
                    </div>
                  )
                }
              })()}
              
              {/* CONDITIONAL INPUT FIELD */}
              {(() => {
                // If it is not online, and it is not a vide, set as a file upload
                if(!isOnline.value && format.value.type!='video'){
                    return (
                      <div className={`form-group ${((file.touched || file.dirty) && file.invalid) ? 'has-error' : ''}`}>
                        <FileInput setFile={this.setFile}/>
                        <p><small>Tamanho máximo de ficheiro é de 100MB</small></p>
                        {file.value && !file.error && <p><strong>Ficheiro: {file.value.name}.{file.value.extension}</strong></p>}
                        {(file.touched || file.dirty) && file.error && <div className="text-danger">{file.error}</div>}
                      </div>
                    )
                }else if (isOnline.value || format.value.type=='video') {
                  // If it is online or is a video, set the link or embed field
                  return (
                    <div className={`form-group ${(link.touched && link.invalid) || (embed.touched && embed.invalid) ? 'has-error' : ''}`}>
                      <input type="text" className="form-control" name="link" placeholder="Indique o endereço do recurso" {...link} />
                      {link.touched && link.error && <div className="text-danger">{link.error}</div>}
                      <small>ou</small>
                      <input type="text" className="form-control" name="embed-video" placeholder="Insira o código de incorporação" {...embed} />
                      {embed.touched && embed.error && <div className="text-danger">{embed.error}</div>}
                      
                    </div>
                  )
                }
              })()}

          </div>
        </div>

        {/* ACCESS */}
        <div className="row">
          <div className="col-xs-12 col-sm-6">
            <label className="input-title">Modo de utilização*</label>
            <div className={`form-group ${access.touched && access.invalid ? 'has-error' : ''}`}>
              {this.renderAccess()}
              {access.touched && access.error && <div className="text-danger">{access.error}</div>}
            </div>            
          </div>
        </div>

        {/* TECH RESOURCES */}
        <div className="row">
          <div className="col-xs-12">
            <label className="input-title">Recursos Técnicos*</label>
            <div className={`form-group ${techResources.touched && techResources.invalid ? 'has-error' : ''}`}>
              <TextArea max="300" min="20" className="form-control" placeholder="Este recurso requer a utilização de..." initVal={techResources.value} {...techResources} />
              {techResources.touched && techResources.error && <div className="text-danger">{techResources.error}</div>}
              
            </div>            
          </div>
        </div>

        {/* DESCRIPTION */}
        <div className="row">
          <div className="col-xs-12">
            <label className="input-title">Descrição*</label>
            <div className={`form-group ${description.touched && description.invalid ? 'has-error' : ''}`}>
              <TextArea max="300" min="20" className="form-control" placeholder="Descreva este recurso sucintamente" initVal={description.value} {...description} />
              {description.touched && description.error && <div className="text-danger">{description.error}</div>}
            </div>            
          </div>
        </div>

        {/* NEXT */}
        <footer className="form-buttons">
          <button type="submit" className="cta primary">Continuar</button>
          <Link to="/painel" className="cta primary no-bg">Cancelar</Link>
        </footer>
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
},
state => ({
  initialValues: {
    exclusive: true,
    isOnline: false,
    tags: [],
    access: []
  }
}))(NewResourceFormFirstPage)