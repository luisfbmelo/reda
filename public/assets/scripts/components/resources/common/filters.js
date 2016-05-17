import React, { PropTypes } from 'react';
import { Component } from 'react';
import _ from 'lodash';

// Utils
import { sortByTitle } from '../../../utils';

// Components
import Collapsible from '../../common/collapse';
import CheckboxGroup from 'react-checkbox-group';


export default class ResourcesFilters extends Component {
	constructor(props){
		super(props);

		this.state = {
			formats: [],
			subjects: [],
			domains: [],
			years: [],
			access: []
		};

		//
		//	Submition
		//
		this.submitFilters = this.submitFilters.bind(this);

		//
		//	Change events
		//
		this.formatChange = this.formatChange.bind(this);
		this.subjectChange = this.subjectChange.bind(this);
		this.domainChange = this.domainChange.bind(this);
		this.yearChange = this.yearChange.bind(this);
		this.accessChange = this.accessChange.bind(this);

		//
		//	Renders
		//
		this.renderFormats = this.renderFormats.bind(this);
		this.renderSubjects = this.renderSubjects.bind(this);
		this.renderDomains = this.renderDomains.bind(this);
		this.renderYears = this.renderYears.bind(this);
		this.renderAccess = this.renderAccess.bind(this);
	}

	componentDidMount(){		
		this.props.fetchFormats();
		this.props.fetchSubjects();
		this.props.fetchDomains();
		this.props.fetchYears();
		this.props.fetchAccess();
	}

	componentDidUpdate(prevProps, prevState) {

		//If previous state is different, then warn container
		if (prevState != this.state){
			this.submitFilters();
		}
	}

	submitFilters(){
		this.props.onFilterChange(this.state);
	}

	//
	//	Handle Changes
	//
	formatChange(data){
		this.setState({
			formats: data
		});
	}

	subjectChange(data){
		this.setState({
			subjects: data
		});		
	}

	domainChange(data){
		this.setState({
			domains: data
		});		
	}

	yearChange(data){
		this.setState({
			years: data
		});	
	}

	accessChange(data){
		this.setState({
			access: data
		});		
	}

	//
	//	RENDER DATA
	//
	// Render formats list
	renderFormats(){
		const { data } = this.props.formats;
		return(
		  <CheckboxGroup
		        name="subjects"
		        value={this.state.formats}
		        onChange={this.formatChange}
		      >
		        {
		          Checkbox => (
		            <div className="row">
		              {data.sort(sortByTitle).map((item,index) => {
		                return (
		                  <div key={item.id} className="col-xs-12">
		                    <Checkbox value={item.id} id={"format-"+item.id}/> 
		                    <label htmlFor={"format-"+item.id}>{item.title}</label>
		                  </div>
		                )
		              })}
		            </div>
		          )
		        }
		  </CheckboxGroup>
		)
	}

	// Render subjects list
	renderSubjects(){
		const { data } = this.props.subjects;
		return(
		  <CheckboxGroup
		        name="subjects"
		        value={this.state.subjects}
		        onChange={this.subjectChange}
		      >
		        {
		          Checkbox => (
		            <div className="row">
		              {data.sort(sortByTitle).map((item,index) => {
		                return (
		                  <div key={item.id} className="col-xs-12">
		                    <Checkbox value={item.id} id={"subject-"+item.id}/> 
		                    <label htmlFor={"subject-"+item.id}>{item.title}</label>
		                  </div>
		                )
		              })}
		            </div>
		          )
		        }
		  </CheckboxGroup>
		)
	}

	// Render domains list
	renderDomains(){
		const { data } = this.props.domains;
		return(
		  <CheckboxGroup
		        name="domains"
		        value={this.state.domains}
		        onChange={this.domainChange}
		      >
		        {
		          Checkbox => (
		            <div className="row">
		              {data.sort(sortByTitle).map((item,index) => {
		                return (
		                  <div key={item.id} className="col-xs-12">
		                    <Checkbox value={item.id} id={"domain-"+item.id}/> 
		                    <label htmlFor={"domain-"+item.id}>{item.title}</label>
		                  </div>
		                )
		              })}
		            </div>
		          )
		        }
		  </CheckboxGroup>
		)
	}

	// Render years list
	renderYears(){
		const { data } = this.props.years;
		return(
		  <CheckboxGroup
		        name="years"
		        value={this.state.years}
		        onChange={this.yearChange}
		      >
		        {
		          Checkbox => (
		            <div className="row">
		              {data.sort(sortByTitle).map((item,index) => {
		                return (
		                  <div key={item.id} className="col-xs-6">
		                    <Checkbox value={item.id} id={"year-"+item.id}/> 
		                    <label htmlFor={"year-"+item.id}>{item.title}</label>
		                  </div>
		                )
		              })}
		            </div>
		          )
		        }
		  </CheckboxGroup>
		)
	}

	// Render access modes list
	renderAccess(){
		const { data } = this.props.access;
		return(
		  <CheckboxGroup
		        name="access"
		        value={this.state.access}
		        onChange={this.accessChange}
		      >
		        {
		          Checkbox => (
		            <div className="row">
		              {data.sort(sortByTitle).map((item,index) => {
		                return (
		                  <div key={item.id} className="col-xs-6">
		                    <Checkbox value={item.id} id={"access-"+item.id}/> 
		                    <label htmlFor={"access-"+item.id}>{item.title}</label>
		                  </div>
		                )
		              })}
		            </div>
		          )
		        }
		  </CheckboxGroup>
		)
	}


	render() {
		const { formats, subjects, domains, years, access } = this.props;
		if (!formats.data || !subjects.data || !domains.data || !years.data || !access.data)
			return null;

		return (
			<div className="resources__filter">
				<div className="row">
					<div className="col-xs-12">
						<Collapsible title="Anos" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							{this.renderYears()}
						</Collapsible>

						<Collapsible title="Disciplinas" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							{this.renderSubjects()}
						</Collapsible>

						<Collapsible title="Domínios" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							{this.renderDomains()}
						</Collapsible>

						<Collapsible title="Formatos" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							{this.renderFormats()}
						</Collapsible>	
						
						<Collapsible title="Modos de utilização" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							{this.renderAccess()}
						</Collapsible>
						
					</div>
				</div>
			</div>
		);
	}
}

ResourcesFilters.propTypes = {
	formats: PropTypes.object.isRequired,
	subjects: PropTypes.object.isRequired
}