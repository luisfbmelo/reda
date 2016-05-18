import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

export default class Empty extends Component {
  render() {
    return (
      <div>
        {this.props.children}
      </div>
    );
  }
}
