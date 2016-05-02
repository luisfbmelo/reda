import React from 'react';

const renderList = (list, name) => {
	return list.map((item, index) => {
		return(<div className="col-xs-6 col-sm-4" key={item.id}>
			<div className="radio">
				<input id={"radio-" + item.id} type="radio" name={name} value="{item.title}" />
	    		<label htmlFor={"radio-" + item.id}>{item.title}</label>
    		</div>
		</div>)
	});
}

export default (props) => {
	console.log(props);
	return(
		<div className="row">
			{renderList(props.list,props.name)}
		</div>
	);
}