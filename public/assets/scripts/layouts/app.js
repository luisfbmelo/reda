import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

// Components
import Helmet from "react-helmet";
import AlertBox from '@/containers/common/alerts';
import Progress from "react-progress-2";

export default class App extends Component {
  render() {
    return (
      <div>
      	<Helmet
            title="REDA - Recursos Educativos Digitais Abertos"
            titleTemplate="%s - REDA"
            defaultTitle="REDA - Recursos Educativos Digitais Abertos"
        />
      	<Progress.Component/>
      	<AlertBox />
        {this.props.children}
      </div>
    );
  }
}
