import React from 'react';
import { Component } from 'react';

// Components
import FavoriteIcon from '@/components/resources/actions/favorite';
import EmailIcon from '@/components/resources/actions/email';
import ShareIcon from '@/components/resources/actions/share';
import EmbedIcon from '@/components/resources/actions/embed';
import HighlightIcon from '@/components/resources/actions/highlight';
import IsAuthenticated from '@/containers/auth/isAuth';
import IsAdmin from '@/containers/auth/isAdmin';

import { setUrl } from '@/utils';

/**
 *
 *	Helper functions
 * 
 */
const printAction = (filesPath, file, url) => {
	if (file){
		return(
			<li>
				<a href={filesPath + "/" + file.name + "." + file.extension} download className="media__action media__action--main" title="Descarregar Ficheiro"><i className="fa fa-download"></i></a>
			</li>
		);
	}else if(url){
		return(
			<li>
				<a href={setUrl(url)} target="_blank" className="media__action media__action--main" title="Abrir endereço"><i className="fa fa-link"></i></a>
			</li>
		);
	}

	return null;
}

export default (props) => {
	const { filesPath, file, url, setFavorite, setHighlight, isHighlight, isFavorite, resource } = props;

	return (
		<ul className="media-footer">
			{printAction(filesPath, file, url)}
			<IsAdmin>				
				<li>
					<HighlightIcon isHighlight={isHighlight} setHighlight={setHighlight} resourceId={resource.id}/>
				</li>
			</IsAdmin>
			<IsAuthenticated>
				<li>
					<FavoriteIcon isFavorite={isFavorite} setFavorite={setFavorite} resourceId={resource.id}/>
				</li>
			</IsAuthenticated>
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