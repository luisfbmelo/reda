import React from 'react';
import { Component } from 'react';

export default class ResourcesOrdering extends Component {
	constructor(props){
		super(props);
	
		this.onOrderChange = this.onOrderChange.bind(this);

		this.state = {
			value: "recent"
		}
	}

	componentDidMount(){		
			
	}

	onOrderChange(e){
		this.setState({value: e.target.value});
		this.props.onChange(e.target.value);
	}

	render() {
		return (
			<div className="ordering">
				<label htmlFor="order-box">Ordenar por:</label>
				
				<select className="form-control" id="order-box" onChange={this.onOrderChange} value={this.state.value}>
					<option value="recent">Mais recente</option>
					<option value="alfa">Alfabeticamente</option>
				</select>
			</div>
		);
	}
}

ResourcesOrdering.propTypes = {
	onChange: React.PropTypes.func.isRequired
}