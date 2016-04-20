import React from 'react';
import { Component } from 'react';
import Collapsible from '../../common/collapse';

import CheckboxGroup from 'react-checkbox-group';


export default class ResourcesFilters extends Component {
	constructor(props){
		super(props);

		this.state = {
			formats: []
		};

		this.formatChange = this.formatChange.bind(this);
	}

	componentDidMount(){		
		this.props.fetchFormats();		
	}

	renderFilters(filters){

	}

	formatChange(data){
		this.setState({
			formats: data
		});		
	}

	render() {
		if (!this.props.formats.data)
			return <div>Loading...</div>;

		return (
			<div className="resources__filter">
				<div className="row">
					<div className="col-xs-12">
						<Collapsible title="Formatos" iconOpen="fa fa-arrow-up" iconClosed="fa fa-arrow-down">
							<CheckboxGroup
						        name="formats"
						        value={this.state.formats}
						        onChange={this.formatChange}
						      >
						        {
						          Checkbox => (
						            <form>
						              <label>
						                <Checkbox value="apple"/> Apple
						              </label>
						              <label>
						                <Checkbox value="orange"/> Orange
						              </label>
						              <label>
						                <Checkbox value="watermelon"/> Watermelon
						              </label>
						            </form>
						          )
						        }
							</CheckboxGroup>
						</Collapsible>

						<Collapsible title="Formatos" iconOpen="fa fa-arrow-up" iconClosed="fa fa-arrow-down">
							<CheckboxGroup
						        name="formats"
						        value={this.state.formats}
						        onChange={this.formatChange}
						      >
						        {
						          Checkbox => (
						            <form>
						              <label>
						                <Checkbox value="apple"/> Apple
						              </label>
						              <label>
						                <Checkbox value="orange"/> Orange
						              </label>
						              <label>
						                <Checkbox value="watermelon"/> Watermelon
						              </label>
						            </form>
						          )
						        }
							</CheckboxGroup>
						</Collapsible>		
					</div>
				</div>
			</div>
		);
	}
}