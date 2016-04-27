import React from 'react';
import { Component } from 'react';

export default class SearchForm extends Component {
	constructor(props){
		super(props);
	}

	onFormSubmit(event) {
	    event.preventDefault();

	    // We need to go and fetch weather data
	    //this.props.fetchWeather(this.state.term);
	    //this.setState({ term: '' });
	}

	handleChange(){

	}

	render() {
		return (
			<section className="search-container">
				<div className="container">
					<form className="input-group search-form" method="get" onSubmit={this.onFormSubmit}>
						<div className="row">
							<div className="col-xs-6 col-sm-4 col-md-2">
								<input type="text" className="form-control" name="keywords" placeholder="Palavras-chave" onChange={this.handleChange} />
							</div>

							<div className="col-xs-6 col-sm-4 col-md-2">
								<select className="form-control" value="0" onChange={this.handleChange}>
									<option value="0">Disciplina</option>
									<option value="1">2</option>
									<option value="2">3</option>
									<option value="3">4</option>
								</select>
							</div>

							<div className="col-xs-6 col-sm-4 col-md-2">
								<select className="form-control" value="0" onChange={this.handleChange}>
									<option value="0">Domínio</option>
									<option value="1">2</option>
									<option value="2">3</option>
									<option value="3">4</option>
								</select>
							</div>

							<div className="col-xs-6 col-sm-4 col-md-2">
								<select className="form-control" value="0" onChange={this.handleChange}>
									<option value="0">Formato</option>
									<option value="1">2</option>
									<option value="2">3</option>
									<option value="3">4</option>
								</select>
							</div>

							<div className="col-xs-6 col-sm-4 col-md-2">
								<select className="form-control" value="0" onChange={this.handleChange}>
									<option value="0">Ano</option>
									<option value="1">2</option>
									<option value="2">3</option>
									<option value="3">4</option>
								</select>
							</div>

							<div className="col-xs-6 col-sm-4 col-md-2">
								<button type="submit" className="cta primary"><i className="fa fa-search" aria-hidden="true"></i>Pesquisar</button>
							</div>
						</div>
					</form>
				</div>
			</section>
		);
	}
}