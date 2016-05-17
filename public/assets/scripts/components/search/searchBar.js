import React from 'react';
import { Component } from 'react';

// Components
import Tags from '../common/tags';

export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state= {keywords: []}
    this.changeKeyword = this.changeKeyword.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  changeKeyword(tags){
    this.setState({
      keyword: tags
    });
  }

  onSubmitForm(e){
    e.preventDefault();
    this.props.onSubmit(this.state.keyword);
  }

  render() {
    return (
    	<form onSubmit={this.onSubmitForm} className={"input-group single-search"}>
        <Tags setTags={this.changeKeyword} tags={this.state.keywords} className="tags-search" placeholder="Palavras-chave"/>
        <button className="cta primary"><i className="fa fa-search" aria-hidden="true"></i> Pesquisar</button>
    	</form>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}