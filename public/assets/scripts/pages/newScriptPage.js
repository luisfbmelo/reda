import React from 'react';
import { Component } from 'react';

// Components
import Helmet from "react-helmet";
import Header from '@/containers/header';
import NewScriptFormContainer from '@/containers/dashboard/newScriptForm';
import BottomNav from '@/components/navigation/bottomNav';

export default class NewResourcePage extends Component {
  render() {
    return (
    	<div>
    		<Helmet
	          title="Gerir Guiões"
	        />
    		<Header location={this.props.location}/>
        	<NewScriptFormContainer params={this.props.params}/>
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}