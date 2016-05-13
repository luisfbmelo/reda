'use strict';

import React from 'react';

const renderList = (list, name,onclickCallback, checkedEl, isSingleCol) => {
	let colClass = isSingleCol ? "col-xs-12" : "col-xs-6 col-sm-4"
	return list.map((item, index) => {
		return(<div className={colClass} key={item.id}>
			<div className="radio">
				<input id={name + "_" + item.id} type="radio" name={name} value="{item.title}" onChange={() => onclickCallback(item)} checked={item.id==checkedEl.id}/>
	    		<label htmlFor={name + "_" + item.id} >{item.title}</label>
    		</div>
		</div>)
	});
}

export default (props) => {
	return(
		<div className="row">
			{renderList(props.list,props.name, props.setRadio, props.checked, props.singleCol)}
		</div>
	);
}