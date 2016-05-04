'use strict';

import React, { Component } from 'react';


export default class FileInput extends Component{
    constructor(props){
        super(props);
        this.uploadFile = this.uploadFile.bind(this);
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
        if (!hasError) {
            //read file
            reader.readAsDataURL(e.target.files[0]);

            //set loading

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

                // Return file metadata
                this.props.setFile({name, extension, data, size});
            }
        }
    }

    render(){
        return <input type="file" onChange={this.uploadFile}/>
    }    
}