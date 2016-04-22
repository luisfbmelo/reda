import React from 'react';
import { Component } from 'react';


export default class SearchBar extends Component {
  constructor(props){
    super(props);

    this.state= {keyword: ""}
    this.changeKeyword = this.changeKeyword.bind(this);
    this.onSubmitForm = this.onSubmitForm.bind(this);
  }

  changeKeyword(e){
    this.setState({
      keyword: e.target.value
    });
  }

  onSubmitForm(e){
    e.preventDefault();
    this.props.onSubmit(this.state.keyword);
  }

  render() {
    return (
    	<form onSubmit={this.onSubmitForm} className={"input-group single-search"}>
        <input type="text" className="form-control" name="keyword" placeholder="Palavras-chave" onChange={this.changeKeyword} value={ this.state.keyword }/>
        <button className="cta primary"><i className="fa fa-search" aria-hidden="true"></i> Pesquisar</button>
    	</form>
    );
  }
}

SearchBar.propTypes = {
  onSubmit: React.PropTypes.func.isRequired
}