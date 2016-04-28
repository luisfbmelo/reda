import React from 'react';
import { Component, PropTypes } from 'react';
import { Link } from 'react-router';

// Boostrap
import { Tooltip, OverlayTrigger } from 'react-bootstrap';

// Components
import Rating from '../../common/rating';
import SvgComponent from '../../common/svg';
import ProtectedButton from '../../auth/protectedButton';
import { ResourceElement } from './resource';

export default class ResourcesList extends Component{

	constructor(props){
		super(props);

		this.renderList = this.renderList.bind(this);
	}

	renderList(list){	
		// Set maximum columns
		let maxcol = this.props.maxcol || 4;
		let classColCount = Math.floor(12/maxcol);

		const { addscript, viewmore, isAuthenticated } = this.props;

		return list.map((el, index) => {
			return <ResourceElement maxcol={maxcol} classColCount={classColCount} addscript={addscript} viewmore={viewmore} isAuthenticated={isAuthenticated} el={el} index={index} key={index}/>
	    });
	}

	render(){
		if (!this.props.list || !this.props.list.data || this.props.list.fetching){
			return <div>Loading...</div>
		}
		return (
			<section className="row">
				{this.renderList(this.props.list.data)}
			</section>
		);
	}	
}

ResourcesList.propTypes = {
	list: PropTypes.object.isRequired,
	maxcol: PropTypes.number,
	addscript: PropTypes.bool,
	viewmore: PropTypes.bool,
	isAuthenticated: PropTypes.bool.isRequired
}