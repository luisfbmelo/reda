import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

// Components
import AlertBox from '@/containers/common/alerts';
import Progress from "react-progress-2";

export default class App extends Component {
  render() {
    return (
      <div>
      	<Progress.Component/>
      	<AlertBox />
        {this.props.children}
      </div>
    );
  }
}
