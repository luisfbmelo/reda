'use strict';

import React, { Component } from 'react';


export default class FileInput extends Component{
    constructor(props){
        super(props);
        this.uploadFile = this.uploadFile.bind(this);

        this.state = { loading: false }
    }

    uploadFile(e) {
        let reader = new FileReader()
        let thisFile = e.target.files[0] || null;
        let hasError = false;

        let name = null;
        let extension = null;
        let data = null;
        let size = thisFile.size;

        /*if (thisFile.size>2000000) {
            hasError = true;
        }*/

        //check if file is image
        if (!hasError && thisFile) {
            //read file
            reader.readAsDataURL(e.target.files[0]);

            //set loading
            this.props.setFile({loading: true});
            this.setState({loading: true});
        } else {
            //clear all fields
        }

        // File loaded
        if (thisFile){
            reader.onload = (e) => {
                // Set file name
                name = thisFile.name.substr(0, thisFile.name.lastIndexOf('.')) || thisFile.name;

                // Set file extension
                extension = thisFile.name.substr(thisFile.name.lastIndexOf('.') + 1);

                // Save file data
                data = e.target.result; 

                // Convert blob to base64
                data = data.split(',')[1];

                // Return file metadata
                this.props.setFile({id:null, name, extension, data, size, loading: false});
                this.setState({loading: false});
            }
        }
    }

    render(){
        return (
            <span className="cta primary btn-file">
                <input type="file" onChange={this.uploadFile}/>{this.state.loading && <i className='fa fa-spinner fa-spin'></i>}{this.state.loading ? "A carregar..." : "Escolher Ficheiro"}
            </span>
        )
    }    
}