'user strict';

import React, { Component } from 'react';
import Tags from 'react-tagsinput'

export default class TagsInput extends Component{
    constructor(props){
        super(props);

        this.handleChange = this.handleChange.bind(this);

        this.state = {
            tags: []
        }
    }

    componentDidMount(){
        this.setState({tags: this.props.tags || []});
    }

    handleChange(tags) {
        this.setState({ tags: tags });
        this.props.setTags(tags);
    }

    render() {
        let inputProps={
            className: 'react-tagsinput-input',
            placeholder: this.props.placeholder
        }
        return (
            <div className={this.props.className}>
                <Tags 
                    value={this.state.tags} 
                    onChange={this.handleChange} 
                    addKeys={[188,9,13,32]} 
                    inputProps={inputProps}/>
            </div>
        )
    }
}