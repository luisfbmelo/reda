import React from 'react';
import { Component } from 'react';

import FavoriteIcon from '../actions/favorite';
import EmailIcon from '../actions/email';
import ShareIcon from '../actions/share';
import EmbedIcon from '../actions/embed';

/**
 *
 *	Helper functions
 * 
 */
const printAction = (status, filesPath, ...args) => {
	let argsObj = args[0];

	if (status && argsObj && argsObj.file){
		return(
			<a href={filesPath + "/" + argsObj.file} download className="media__action media__action--main"><i className="fa fa-download"></i></a>
		);
	}else if(argsObj && argsObj.url){
		return(
			<a href={argsObj.url} target="_blank" className="media__action media__action--main"><i className="fa fa-link"></i></a>
		);
	}

	return "";
}

export default (props) => {
	return (
		<ul className="media-footer">
			<li>
				{printAction(true, props.filesPath)}
			</li>
			<li>
				<FavoriteIcon isFavorite={props.isFavorite} setFavorite={props.setFavorite}/>
			</li>
			<li>
				<EmailIcon />
			</li>
			<li>
				<ShareIcon />
			</li>
			<li>
				<EmbedIcon />
			</li>
		</ul>
	);
}