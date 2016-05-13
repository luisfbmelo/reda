import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import BottomNav from '../components/navigation/bottomNav';

import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NotFoundPage extends Component {
  render() {
    return (
    	<ReactCSSTransitionGroup transitionName = "transition"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
  			<Header location={this.props.location}/>
        <div>
          Página Nâo Encontrada
        </div>
  			<BottomNav location={this.props.location}/>
    	</ReactCSSTransitionGroup>
    );
  }
}