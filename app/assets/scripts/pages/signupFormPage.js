import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import SignupForm from '../containers/auth/signupForm';
import BottomNav from '../components/navigation/bottomNav';

// Animation
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

export default class NewResourcePage extends Component {
  render() {
    return (
    	<ReactCSSTransitionGroup transitionName = "transition"
               transitionAppear = {true} transitionAppearTimeout = {500}
               transitionEnter = {false} transitionLeave = {false}>
  			<Header location={this.props.location}/>
        <SignupForm />
  			<BottomNav location={this.props.location}/>
    	</ReactCSSTransitionGroup>
    );
  }
}