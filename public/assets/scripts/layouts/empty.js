import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Helmet from "react-helmet"; 

export default class Empty extends Component {
  render() {
    return (
      <div>
      	<Helmet
            title="REDA - Recursos Educativos Digitais Abertos"
            titleTemplate="%s - REDA"
            defaultTitle="REDA - Recursos Educativos Digitais Abertos"
        />
        {this.props.children}
      </div>
    );
  }
}
