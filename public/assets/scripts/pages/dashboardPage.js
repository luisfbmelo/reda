import React from 'react';
import { Component } from 'react';

// Components
import Helmet from "react-helmet";
import Header from '@/containers/header';
import ProfileNav from '@/components/navigation/profileNav';
import DashBoard from '@/components/dashboard';
import BottomNav from '@/components/navigation/bottomNav';

export default class DiscoverPage extends Component {
  render() {
    return (
    	<div>
        <Helmet
          title="Painel"
        />
  			<Header location={this.props.location}/>
        <ProfileNav location={this.props.location}/>
        <DashBoard location={this.props.location}/>
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}