import React from 'react';
import { Component } from 'react';

// Components
import Tags from '@/components/common/tags';

const SearchBar = (props) => {
    return (
    	<div className={"input-group single-search " + (props.className || "")}>
	        <Tags setTags={props.onChangeTags} tags={props.tags} className="tags-search" placeholder="Palavras-chave"/>
	        <button className="cta primary"  onClick={props.onSubmit}><i className="fa fa-search" aria-hidden="true"></i> Pesquisar</button>
    	</div>
    );
}

SearchBar.propTypes = {
  onSubmit: React.PropTypes.func.isRequired,
  tags: React.PropTypes.array.isRequired,
  onChangeTags: React.PropTypes.func.isRequired
}

export default SearchBar