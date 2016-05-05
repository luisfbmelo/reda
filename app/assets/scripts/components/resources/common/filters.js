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
			return null;

		return (
			<div className="resources__filter">
				<div className="row">
					<div className="col-xs-12">
						<Collapsible title="Formatos" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							<CheckboxGroup
						        name="formats"
						        value={this.state.formats}
						        onChange={this.formatChange}
						      >
						        {
						          Checkbox => (
						            <form>						              
										<Checkbox value="apple" id="apple"/> 
										<label htmlFor="apple">Apple</label>

										<Checkbox value="apple2" id="apple2"/> 
										<label htmlFor="apple2">Apple</label>

										<Checkbox value="apple3" id="apple3"/> 
										<label htmlFor="apple3">Apple</label>
						            </form>
						          )
						        }
							</CheckboxGroup>
						</Collapsible>	

						<Collapsible title="Formatos" iconOpen="fa fa-chevron-up" iconClosed="fa fa-chevron-down">
							<CheckboxGroup
						        name="formats"
						        value={this.state.formats}
						        onChange={this.formatChange}
						      >
						        {
						          Checkbox => (
						            <form>						              
										<Checkbox value="orange" id="orange"/> 
										<label htmlFor="orange">orange</label>

										<Checkbox value="orange2" id="orange2"/> 
										<label htmlFor="orange2">orange</label>

										<Checkbox value="orange3" id="orange3"/> 
										<label htmlFor="orange3">Apple</label>
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