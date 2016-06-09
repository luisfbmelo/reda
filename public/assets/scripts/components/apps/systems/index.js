import React, { PropTypes, Component } from 'react';

// Components


export default (props) => {
	const { tabs, setTab, curTab } = props;

	return(
		<div className="tabs-container">
			<ul class="nav nav-tabs">
				{
					tabs.map(tab => {
						return  <li className={"cta primary" + (curTab!=tab.id ? " outline" : "")} key={tab.id} onClick={() => setTab(tab.id)}>{tab.title}</li>
					})
				}
			</ul>
		</div>
	)
}