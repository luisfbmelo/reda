import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';


export default class IndexPage extends Component {
  render() {
    return (
    	<div>
	      <Header location={this.props.location} />
      	</div>
    );
  }
}