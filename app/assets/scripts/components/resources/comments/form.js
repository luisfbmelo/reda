import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';


export default class CommentForm extends Component {
  constructor(props){
    super(props);

    this.onSubmit = this.onSubmit.bind(this);
  }


  onSubmit(props){
  
  }


  render() {
    const { asyncValidating, fields: { description }, resetForm, handleSubmit, submitting } = this.props;

    return (
      <div className="comment-form box-form">
        <form onSubmit={handleSubmit(this.onSubmit)}>
          <div className={`form-group ${description.touched && description.invalid ? 'has-error' : ''}`}>
            <textarea className="form-control" placeholder="Descrição" {...description}></textarea>
            {asyncValidating === 'description' && <i className='fa fa-spinner fa-spin'/>}
            {description.touched && description.error && <div className="text-danger">{description.error}</div>}
          </div>
          
          <div className="text-center">
            <button type="submit" disabled={asyncValidating} className="cta primary">
              Submeter Comentário
            </button>
          </div>
        </form>
      </div>
    )
  }
}

CommentForm.propTypes = {
  fields: PropTypes.object.isRequired,
  resetForm: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  submitting: PropTypes.bool.isRequired
}

CommentForm.contextTypes = {
  router: PropTypes.object
}