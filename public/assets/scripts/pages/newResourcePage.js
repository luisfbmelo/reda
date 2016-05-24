import React from 'react';
import { Component } from 'react';
import Header from '../containers/header';
import NewResourceFormContainer from '../containers/dashboard/newResourceForm';
import BottomNav from '../components/navigation/bottomNav';

export default class NewResourcePage extends Component {
  render() {
    return (
    	<div>
  			<Header location={this.props.location}/>
        	<NewResourceFormContainer params={this.props.params} />
  			<BottomNav location={this.props.location}/>
    	</div>
    );
  }
}