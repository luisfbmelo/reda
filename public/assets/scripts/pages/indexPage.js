import React from 'react';
import { Component } from 'react';

// Containers
import HeaderContainer from '@/containers/header';
import FormatsContainer from '@/containers/formats';
import ExploreBlock from '@/components/blocks/explore';
import RecentContainer from '@/containers/resources/recent';
import ContributeBlockContainer from '@/containers/blocks/contribute';
import BottomNav from '@/components/navigation/bottomNav';

export default class IndexPage extends Component {
  render() {   
    return (
    	<div>
	    	<HeaderContainer location={this.props.location} />
            <FormatsContainer />	
            <ExploreBlock />
            <RecentContainer />
            <ContributeBlockContainer />
            <BottomNav location={this.props.location} />
    	</div>
    );
  }
}