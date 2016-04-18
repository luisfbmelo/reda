import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';


export default class DiscoverPage extends Component {
  render() {
    return (
      <Header location={this.props.location}/>
    );
  }
}