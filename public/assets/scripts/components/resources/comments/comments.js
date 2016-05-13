import React from 'react';
import Comment from './comment';

export default (props) => {
	var { comments, editable, deleteComment } = props;

	return(
		<div className="comments__children">
			{
				comments.map((comment) => {
			        return <Comment key={comment.id} comment={comment} editable={editable} deleteComment={deleteComment} />
				})
			}
		</div>
	);
}