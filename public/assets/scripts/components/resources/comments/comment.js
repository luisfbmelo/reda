import React from 'react';
import Comments from './comments';
import { Media } from 'react-bootstrap';
import { setDateFormat } from '@/utils';

var renderDelete = (deleteOpt, obj) => {
	return(
		<button className="cta secundary no-bg" onClick={() => deleteOpt(obj)}>Eliminar</button>
	);
}

export default (props) => {
	var { comment, editable, deleteComment } = props;
	return(
		<div className="comments__parent">
			<Media>
				<Media.Left>
					<div className="user-image" style={{"backgroundImage": `url(${comment.user.image.src})`}}></div>					
				</Media.Left>

				<Media.Body>
					<span className="meta-info"><strong>{comment.user.name}</strong> a {setDateFormat(comment.date, "LLL")}</span>
					<p>{comment.text}</p>
					{ editable ? renderDelete(deleteComment, comment) : ""}
					{ comment.children ? <Comments comments={comment.children} editable={editable} deleteComment={deleteComment}/> : ""}					
				</Media.Body>
			</Media>
			
		</div>
	);
}