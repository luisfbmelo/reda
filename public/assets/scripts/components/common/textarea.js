'user strict';

import React, { Component } from 'react';

export default (props) => {
	const { field, max, min } = props;

	return (
		<div>
			<textarea {...props} {...field} maxLength={max} minLength={min}></textarea>
			<div className="row">
                <div className="col-xs-6">
                {(() => {
                	if (max){
                		return <span>{field.value.length + "/" + max}</span>
                	}
                })()}
                </div>
                <div className="col-xs-6 text-right">
                  <small>Deve ter no mínimo {min} caracteres e no máximo {max}</small>
                </div>
          	</div>
        </div>
    )

}