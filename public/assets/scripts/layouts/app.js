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
            meta={[
                {"name": "description", "content": "REDA é uma plataforma dedicada à disponibilização rápida e fácil de conteúdos educativos para qualquer aluno, professor ou utilizador, sem restrições."}
            ]}
        />
      	<Progress.Component/>
      	<AlertBox />
        {this.props.children}
      </div>
    );
  }
}
