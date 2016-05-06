import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

// Components
import AlertBox from '../containers/common/alerts';

export default class App extends Component {
  render() {
    return (
      <div>
      	<AlertBox />
        {this.props.children}
      </div>
    );
  }
}
