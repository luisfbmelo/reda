import React from 'react';
import { Component } from 'react';

// Components
import Tags from '../common/tags';

export default class SearchForm extends Component {
	constructor(props){
		super(props);

		this.state= {
			tags: [],
			subjects: null,
			domains: null,
			formats: null,
			years: null
		}

		//
		//	Event handlers
		//
		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.changeTags = this.changeTags.bind(this);
		this.onSubjectChange = this.onSubjectChange.bind(this);

		//
		//	Renders
		//
		this.renderYears = this.renderYears.bind(this);
		this.renderSubjects = this.renderSubjects.bind(this);
		this.renderDomains = this.renderDomains.bind(this);
		this.renderFormats = this.renderFormats.bind(this);
	}

	componentDidMount(){
		this.props.fetchYears(true);
		this.props.fetchSubjects(true);
		this.props.fetchFormats(true);
	}

	// Reset form on unmount
	componentWillUnmount() {
	    this.props.resetYears()
	    this.props.resetSubjects();
	    this.props.resetFormats();
	    this.props.resetDomains();
	}

	// Submit search
	onFormSubmit(event) {
	    event.preventDefault();
	    this.props.onSubmit(this.state);
	}

	// Handle tags change
	changeTags(tags){
		this.setState({
		  tags: tags
		});
	}

	//Handle subject change
	onSubjectChange(subject){
		this.setState({
			subjects: [parseInt(subject.target.value)],
			domains: null
		});
		this.props.fetchDomainsFromSubject(subject.target.value, true);
	}

	calcColCount(cols){
		return Math.floor(12/cols);
	}

	// Render years
	renderYears(){
		const { data, fetched } = this.props.years;
		if (fetched){
			return _.sortBy(data, 'title').map(year => {
				return <option value={year.id} key={year.id}>{year.title}</option>;
			})
		}
	}

	// Render subjects
	renderSubjects(){
		const { data, fetched } = this.props.subjects;
		if (fetched){
			return _.sortBy(data, 'title').map(subject => {
				return <option value={subject.id} key={subject.id}>{subject.title}</option>;
			})
		}
	}

	// Render domains
	renderDomains(){
		const { data, fetched } = this.props.domains;
		if (fetched){
			return _.sortBy(data, 'title').map(domain => {
				return <option value={domain.id} key={domain.id}>{domain.title}</option>;
			})
		}
	}

	// Render formats
	renderFormats(){
		const { data, fetched } = this.props.formats;
		if (fetched){
			return _.sortBy(data, 'title').map(format => {
				return <option value={format.id} key={format.id}>{format.title}</option>;
			})
		}
	}

	render() {
		// Count total cols
		let maxcol = 6;
		let classColCount = this.calcColCount(maxcol);

		const {searchTags, iconClass, buttonText, domains} = this.props;

		return (
			<section className="search-container">
				<form className="input-group search-form" method="get" onSubmit={this.onFormSubmit}>
					<div className="row">
					{(() => {
						if (searchTags){							
							return (<div className={"col-xs-12"}>
								<Tags setTags={this.changeTags} tags={this.state.tags} className="tags-search" placeholder="Palavras-chave"/>
							</div>)
						}
					})()}
						

						<div className={"col-xs-6 col-sm-4 col-md-3"}>
							<select className="form-control" value={this.state.subjects} onChange={this.onSubjectChange}>
								<option value="" default>Disciplina</option>
								{this.renderSubjects()}
							</select>
						</div>

						<div className={"col-xs-6 col-sm-4 col-md-3"}>
							<select className="form-control" disabled={!domains.data || domains.data.length==0} value={this.state.domains} onChange={item => this.setState({domains: [parseInt(item.target.value)]})}>
								<option value="" default>Domínio</option>
								{this.renderDomains()}
							</select>
						</div>

						<div className={"col-xs-6 col-sm-4 col-md-2"}>
							<select className="form-control" value={this.state.formats} onChange={item => this.setState({formats: [parseInt(item.target.value)]})}>
								<option value="" default>Formato</option>
								{this.renderFormats()}
							</select>
						</div>

						<div className={"col-xs-6 col-sm-4 col-md-2"}>
							<select className="form-control" value={this.state.years} onChange={item => this.setState({years: [parseInt(item.target.value)]})}>
								<option value="" default>Ano</option>
								{this.renderYears()}
							</select>
						</div>

						<div className={"col-xs-12 col-sm-4 col-md-2"}>
							<button type="submit" className="cta primary"><i className={iconClass || "fa fa-search"} aria-hidden="true"></i>
								{buttonText || "Pesquisar"}
							</button>
						</div>
					</div>
				</form>
			</section>
		);
	}
}