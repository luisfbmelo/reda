import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { fetchFormats } from '../../actions/formats';
import { bindActionCreators } from 'redux';

import WizardFormFirstPage from '../../components/resources/newResource/newResourceFormFirstPage';
import WizardFormSecondPage from '../../components/resources/newResource/newResourceFormSecondPage';

class NewResourceFormContainer extends Component {
  constructor(props) {
    super(props)

    // Pro tip: The best place to bind your member functions is in the component constructor
    this.nextPage = this.nextPage.bind(this)
    this.previousPage = this.previousPage.bind(this)
    this.state = {
      page: 1
    }
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

  render() {
    const { onSubmit } = this.props
    const { page } = this.state
    return (
      <div className="new-resource">
        <header className="new-form-header text-center">
          <h1>Novo Recurso</h1>
          {this.printFormBreadcrumbs()}
        </header>
        <div className="new-resource__container">
          <section className="container">
            {page === 1 && <WizardFormFirstPage onSubmit={this.nextPage} mapProps={this.props}/>}
            {page === 2 && <WizardFormSecondPage previousPage={this.previousPage} onSubmit={this.nextPage}/>}
          </section>
        </div>        
      </div>
    )
  }
}

NewResourceFormContainer.propTypes = {
  onSubmit: PropTypes.func.isRequired
}


function mapStateToProps(state) {
  return { formats: state.formats};
}

function mapDispatchToProps(dispatch) { 
  return bindActionCreators({ fetchFormats }, dispatch);
}


export default connect(mapStateToProps, mapDispatchToProps)(NewResourceFormContainer);