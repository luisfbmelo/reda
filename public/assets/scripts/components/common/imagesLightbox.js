'use strict';

import React, { Component } from 'react';

// Components
import Lightbox from 'react-image-lightbox';

export default class ImageLightbox extends Component{
    constructor(props){
        super(props);

        //
        //  Event handlers
        //
        this.openLightbox = this.openLightbox.bind(this);
        this.closeLightbox = this.closeLightbox.bind(this);
        this.moveNext = this.moveNext.bind(this);
        this.movePrev = this.movePrev.bind(this);

        //
        //  Renders
        //
        this.renderImages = this.renderImages.bind(this);

        //
        //  State and variables
        //
        this.state = {
            index: 0,
            isOpen: false
        }

        this.images = [];
    }

    componentDidMount(){
        this.images = this.props.images;
    }

    openLightbox() {
        this.setState({ isOpen: true });
    }

    closeLightbox() {
        this.setState({ isOpen: false });
    }

    moveNext() {
        this.setState({ index: (this.state.index + 1) % images.length });
    }

    movePrev() {
        this.setState({ index: (this.state.index + images.length - 1) % images.length });
    }

    renderImages(){
        return this.images.map((image, index) => {
            return <img src={image} className="img-responsive lightbox-img" onClick={this.openLightbox} key={index}/>
        })
    }

    render() {
        var lightbox = '';
        if (this.state.isOpen) {
            lightbox = (
                <Lightbox
                    mainSrc={this.images[this.state.index]}
                    nextSrc={this.images.length>1 ? this.images[(this.state.index + 1) % this.images.length] : null}
                    prevSrc={this.images.length>1 ?  this.images[(this.state.index + this.images.length - 1) % this.images.length] : null}

                    onCloseRequest={this.closeLightbox}
                    onMovePrevRequest={this.movePrev}
                    onMoveNextRequest={this.moveNext}
                />
            );
        }

        return (
            <div>
                {this.renderImages()}
                {lightbox}
            </div>
        );
    }    
}