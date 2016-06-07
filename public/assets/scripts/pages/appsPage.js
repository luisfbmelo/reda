import React from 'react';
import { Component } from 'react';

// Components
import Helmet from "react-helmet";
import Header from '@/containers/header';
import AppsIndex from '@/containers/apps';
import BottomNav from '@/components/navigation/bottomNav';

export default class AppsPage extends Component {
  render() {
    return (
    	<div>
    		<Helmet
	          title="Aplicações"
	        />
  			<Header location={this.props.location}/>
        <AppsIndex />
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}