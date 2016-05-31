'user strict';

import React, { Component } from 'react';

export default (props) => {
	const { field, maxLength, minLength } = props;

	return (
		<div>
			<textarea {...props} {...field}></textarea>
			<div className="row">
                <div className="col-xs-6">
                {(() => {
                	if (maxLength){
                		return <span>{field.value.length + "/" + maxLength}</span>
                	}
                })()}
                </div>
                <div className="col-xs-6 text-right">
                  <small>Deve ter no mínimo {minLength} caracteres e no máximo {maxLength}</small>
                </div>
          	</div>
        </div>
    )

}