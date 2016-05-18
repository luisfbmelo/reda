'user strict';

import React, { Component } from 'react';
import Tags from 'react-tagsinput'

const TagsInput = (props) => {

    let inputProps={
        className: 'react-tagsinput-input',
        placeholder: props.placeholder
    }
    return (
        <div className={props.className}>
            <Tags 
                value={props.tags} 
                onChange={props.setTags} 
                addKeys={[188,9,13,32]} 
                inputProps={inputProps}
                addOnBlur={true}
                addOnPast={true}/>
        </div>
    )    
}

TagsInput.propTypes = {
    className: React.PropTypes.string,
    tags: React.PropTypes.array.isRequired,
    setTags: React.PropTypes.func.isRequired
}

export default TagsInput