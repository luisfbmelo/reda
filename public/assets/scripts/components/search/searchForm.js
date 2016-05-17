import React from 'react';
import { Component } from 'react';

// Components
import Tags from '../common/tags';

export default class SearchForm extends Component {
	constructor(props){
		super(props);

		this.state= {
			keywords: [],
			subject: "0",
			domain: "0",
			format: "0",
			year: "0"
		}

		this.onFormSubmit = this.onFormSubmit.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.changeKeyword = this.changeKeyword.bind(this);

		//
		//	Renders
		//
		this.renderYears = this.renderYears.bind(this);
		this.renderSubjects = this.renderSubjects.bind(this);
		this.renderDomains = this.renderDomains.bind(this);
		this.renderFormats = this.renderFormats.bind(this);
	}

	componentDidMount(){
		this.props.fetchYears();
		this.props.fetchSubjects();
		this.props.fetchDomains();
		this.props.fetchFormats();
	}

	onFormSubmit(event) {
	    event.preventDefault();

	    // We need to go and fetch weather data
	    //this.props.fetchWeather(this.state.term);
	    //this.setState({ term: '' });
	    
	    
	    this.props.onSubmit();
	}

	handleChange(){

	}

	// Handle keywords change
	changeKeyword(tags){
		this.setState({
		  keyword: tags
		});
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

		const {searchKeywords, iconClass, buttonText} = this.props;

		return (
			<section className="search-container">
				<form className="input-group search-form" method="get" onSubmit={this.onFormSubmit}>
					<div className="row">
					{(() => {
						if (searchKeywords){							
							return (<div className={"col-xs-12"}>
								<Tags setTags={this.changeKeyword} tags={this.state.keywords} className="tags-search" placeholder="Palavras-chave"/>
							</div>)
						}
					})()}
						

						<div className={"col-xs-6 col-sm-4 col-md-3"}>
							<select className="form-control" value={this.state.subject} onChange={item => this.setState({subject: item.target.value})}>
								<option value="0" default>Disciplina</option>
								{this.renderSubjects()}
							</select>
						</div>

						<div className={"col-xs-6 col-sm-4 col-md-3"}>
							<select className="form-control" value={this.state.domain} onChange={item => this.setState({domain: item.target.value})}>
								<option value="0" default>Domínio</option>
								{this.renderDomains()}
							</select>
						</div>

						<div className={"col-xs-6 col-sm-4 col-md-2"}>
							<select className="form-control" value={this.state.format} onChange={item => this.setState({format: item.target.value})}>
								<option value="0" default>Formato</option>
								{this.renderFormats()}
							</select>
						</div>

						<div className={"col-xs-6 col-sm-4 col-md-2"}>
							<select className="form-control" value={this.state.year} onChange={item => this.setState({year: item.target.value})}>
								<option value="0" default>Ano</option>
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