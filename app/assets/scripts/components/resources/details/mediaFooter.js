import React from 'react';
import { Component } from 'react';

import FavoriteIcon from '../actions/favorite';
import EmailIcon from '../actions/email';
import ShareIcon from '../actions/share';
import EmbedIcon from '../actions/embed';

import { setUrl } from '../../../utils';

/**
 *
 *	Helper functions
 * 
 */
const printAction = (status, filesPath, ...args) => {
	let argsObj = args[0];

	if (status && argsObj && argsObj.file){
		return(
			<li>
				<a href={filesPath + "/" + argsObj.file} download className="media__action media__action--main"><i className="fa fa-download"></i></a>
			</li>
		);
	}else if(argsObj && argsObj.url){
		return(
			<li>
				<a href={setUrl(argsObj.url)} target="_blank" className="media__action media__action--main"><i className="fa fa-link"></i></a>
			</li>
		);
	}

	return null;
}

export default (props) => {
	const { filesPath, file, url, setFavorite, isFavorite } = props;
	
	return (
		<ul className="media-footer">
			{printAction(true, filesPath, {file, url})}
			<li>
				<FavoriteIcon isFavorite={isFavorite} setFavorite={setFavorite}/>
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