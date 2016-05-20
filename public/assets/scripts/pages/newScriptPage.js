import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import NewScriptFormContainer from '../containers/dashboard/newScriptForm';
import BottomNav from '../components/navigation/bottomNav';

export default class NewResourcePage extends Component {
  render() {
    return (
    	<div>
    		<Header location={this.props.location}/>
        	<NewScriptFormContainer />
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}