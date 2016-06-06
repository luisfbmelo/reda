import React, { PropTypes } from 'react';
import { Component } from 'react';
import _ from 'lodash';

// Utils
import { sortByTitle, toggleClass, removeClass } from '@/utils';

// Components
import Collapsible from '@/components/common/collapse';
import CheckboxGroup from 'react-checkbox-group';


export default class ResourcesFilters extends Component {
	constructor(props){
		super(props);

		this.state = {
			formats: [],
			subjects: [],
			domains: [],
			years: [],
			access: [],
			update: false
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
		this.toggleList = this.toggleList.bind(this);
		this.clearAll = this.clearAll.bind(this);

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
		this.props.fetchSubjects(true);
		this.props.fetchDomains(true);
		this.props.fetchYears(true);
		this.props.fetchAccess(true);

		// Are there any filters from localStorage or state?
		var localFilters = JSON.parse(localStorage.getItem('filters'));
		if (this.props.filters.data!=null){
			const { formats, subjects, domains, years, access } = this.props.filters.data.filters;
			this.setState({
				formats,
				subjects,
				domains,
				years,
				access
			});
		}else if (localFilters && localFilters.filters){
			const { formats, subjects, domains, years, access } = localFilters.filters;
			this.setState({
				formats,
				subjects,
				domains,
				years,
				access
			});
		}
	}

	// Reset filters on unmount
	componentWillUnmount() {
	    this.props.resetYears();
	    this.props.resetSubjects();
	    this.props.resetFormats();
	    this.props.resetDomains();
	    this.props.resetAccess();  

	    //	Remove open class from body on unmount
		removeClass('open',document.getElementsByTagName("BODY")[0]);
		removeClass('filter-menu',document.getElementsByTagName("BODY")[0]);
	}

	componentDidUpdate(prevProps, prevState) {

		//If previous state is different, then warn container
		if (this.state.update){
			this.submitFilters();
		}
	}

	// Change list statue
	toggleList(){
		let list = this.refs.filters_list;
		let backdrop = this.refs.backdrop;
		let body = document.getElementsByTagName("BODY")[0];

		toggleClass('open', list);
		toggleClass('open', backdrop);
		toggleClass('open', body);
		toggleClass('filter-menu', body);
	}

	//
	//	On submit
	//
	submitFilters(){
		const { formats, subjects, domains, years, access } = this.state;

		this.props.onFilterChange({ formats, subjects, domains, years, access });
		this.setState({update: false});
	}

	//
	//	Clear all filters
	//
	clearAll(){
		this.setState({
			formats: [],
			subjects: [],
			domains: [],
			years: [],
			access: [],
			update: true
		});

		localStorage.setItem('filters', null);
	}

	//
	//	Handle Changes
	//
	formatChange(data){
		this.setState({
			formats: data,
			update: true
		});
	}

	subjectChange(data){
		this.setState({
			subjects: data,
			update: true
		});		
	}

	domainChange(data){
		this.setState({
			domains: data,
			update: true
		});		
	}

	yearChange(data){
		this.setState({
			years: data,
			update: true
		});	
	}

	accessChange(data){
		this.setState({
			access: data,
			update: true
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
		              {data.map((item,index) => {
		              	if (item.type!='others'){
		              		return (
			                  <div key={item.id} className="col-xs-12">
			                    <Checkbox value={item.id} id={"format-"+item.id}/> 
			                    <label htmlFor={"format-"+item.id}>{item.title}</label>
			                  </div>
			                )
		              	}		                
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
		              {data.map((item,index) => {
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
		              {data.map((item,index) => {
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
		              {data.map((item,index) => {
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
		              {data.map((item,index) => {
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
				<div className="backdrop" ref="backdrop" onClick={this.toggleList}></div>
				<div className="row filters-button">
					<div className="col-xs-12">
						<button className="cta primary outline" onClick={this.toggleList}><i className="fa fa-filter"></i>Filtrar Lista</button>	
					</div>					
				</div>
				<div className="row filters__list" ref="filters_list">
					{/* Title */}
					<div className="col-xs-10 filters__list--title">
						<h6>Ajuste a lista</h6>
					</div>
					{/* Close Button */}
					<div className="col-xs-2 filters__list--close">
						<button type="button" className="close" aria-label="Close" onClick={this.toggleList}><span aria-hidden="true">&times;</span></button>
					</div>
					<div className="col-xs-12 filters__list--elements">
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
					<div className="col-xs-12 filters__list--submit">
						<button className="cta primary" onClick={this.toggleList}>Fechar</button>	
					</div>	
					<div className="col-xs-12 filters__list--clear">
						<button className="cta primary outline" onClick={this.clearAll}>Remover Todos</button>	
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