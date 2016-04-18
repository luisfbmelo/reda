import React from 'react';
import { Component } from 'react';
import { connect } from 'react-redux';

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

	render() {
		return (
			<div className="container">
				<form className="input-group search-form" method="get" onSubmit={this.onFormSubmit}>
					<div className="row">
						<div className="col-xs-2">
							<input type="text" className="form-control" name="keywords" placeholder="Palavras-chave" />
						</div>

						<div className="col-xs-2">
							<select className="form-control">
								<option>Disciplina</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div>

						<div className="col-xs-2">
							<select className="form-control">
								<option>Domínio</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div>

						<div className="col-xs-2">
							<select className="form-control">
								<option>Formato</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div>

						<div className="col-xs-2">
							<select className="form-control">
								<option>Ano</option>
								<option>2</option>
								<option>3</option>
								<option>4</option>
							</select>
						</div>

						<div className="col-xs-2">
							<button type="submit" className="cta primary">Pesquisar</button>
						</div>
					</div>
				</form>
			</div>
		);
	}
}