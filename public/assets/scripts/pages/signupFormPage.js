import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import SignupForm from '../containers/auth/signupForm';
import BottomNav from '../components/navigation/bottomNav';

export default class NewResourcePage extends Component {
  render() {
    return (
    	<div>
  			<Header location={this.props.location}/>
        <SignupForm />
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}