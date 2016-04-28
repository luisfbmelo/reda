import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import ProfileNav from '../components/navigation/profileNav';
import BottomNav from '../components/navigation/bottomNav';

// Animation
import ReactCSSTransitionGroup from 'react/lib/ReactCSSTransitionGroup';

export default class DiscoverPage extends Component {
  render() {
    return (
    	<div>
  			<Header location={this.props.location}/>
        	<ProfileNav location={this.props.location}/>
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}