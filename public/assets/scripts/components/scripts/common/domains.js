import React, { Component, PropTypes } from 'react';
import CheckboxGroup from 'react-checkbox-group';

import _ from 'lodash';

export default class DomainsList extends Component{
	constructor(props){
		super(props);

		this.state = {
			scriptDomains: null
		}
	}

	componentWillReceiveProps(nextProps) {		
	    this.setState({
	    	scriptDomains: nextProps.script.domains.value
	    })
	}

	setDomains(index, group){
		this.props.setDomains(index, group);
	}

	// Check if domains are in any subject
	// DOMAINS MUST BE PROVIDED WITH THEIR SUBJECTS ASSOCIATED
	domainsOfSubject(script, domains){

		// Make copy of domains to maintain immutable
		let domainsCopy = _.assign([], domains.data);

		// Are any subjects selected
		if (script.subjects.value && script.subjects.value.length>0){
	
		  domainsCopy = _.filter(domainsCopy, (domain) => {
		    let exists = false;

		    // If domain subjects was selected
		    for (let domainSubject of domain.Subjects){
		      exists = script.subjects.value.indexOf(domainSubject.id) >= 0;
		    }

		    return exists;
		  });

		  // Avoid returning duplicates
		  return _.uniqBy(domainsCopy, 'title');
		}

		return null;
	}

	render(){
		const { script, scriptIndex, setDomains, domains } = this.props;
		
		// Get domains to present
    	const totalDomains = this.domainsOfSubject(script, domains);

 		if ((!script.subjects.value || script.subjects.value.length==0) || !totalDomains || totalDomains.length==0){
 			return null;
 		}

		return (
	      <div className="row">
	        <div className="col-xs-12">
	          <label className="input-title">Domínios*</label>
	          <div className={`form-group ${script.domains.touched && script.domains.invalid ? 'has-error' : ''}`}>

	          {(() => {
	    
	            if (totalDomains && totalDomains.length>0){            	
	              return(
	                <CheckboxGroup
	                      name={"domains-checkbox-"+scriptIndex}
	                      value={this.state.scriptDomains}
	                      onChange={this.setDomains.bind(this, scriptIndex)}
	                    >
	                      {	                     
	                        Checkbox => (
	                          <div className="row">
	                            {totalDomains.map((item,index) => {
	                              return (
	                                <div key={"domains-" + scriptIndex + "-" +item.id} className="col-xs-6 col-sm-3 domains-selection">
	                                  <Checkbox value={item.id} id={"domains-" + scriptIndex + "-" + item.id}/> 
	                                  <label htmlFor={"domains-" + scriptIndex + "-" +item.id}>{item.title}</label>
	                                </div>
	                              )
	                            })}
	                          </div>
	                        )
	                      }
	                </CheckboxGroup>
	              )
	            }
	          })()}            
	            {script.domains.touched && script.domains.error && <div className="text-danger">{script.domains.error}</div>}
	          </div>
	        </div>
	      </div>
	    )
	}
}

DomainsList.propTypes = {
	script: PropTypes.object.isRequired,
	scriptIndex: PropTypes.number.isRequired,
	setDomains: PropTypes.func.isRequired,
	domains: PropTypes.object.isRequired
}