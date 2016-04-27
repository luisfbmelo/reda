import React, {PropTypes} from 'react';
import { Component } from 'react';
import { Link } from 'react-router';
import Comments from './comments';

export default class CommentsListing extends Component {
	constructor(props){
		super(props);

		this.deleteComment = this.deleteComment.bind(this);
	}

	componentDidMount(){
		this.props.fetchComments();
	}

	deleteComment(obj){
		/* Delete comment */
	}

	renderComments(comments){
		var { isAuthenticated } = this.props.auth;

		return(
			<div className="row">
				<div className="col-xs-12">
					<Comments comments={comments} deleteComment={this.deleteComment} editable={isAuthenticated} />							
				</div>						
			</div>
		);
	}

	render() {
		var comments = [];
		if (this.props.comments && this.props.comments.data){
			comments = this.props.comments.data;
		}	
		
		return (
			<div className="comments__container">
				<div className="row">
					<div className="col-xs-12">
						<h6>{comments.length}{comments.length>1 || comments.length==0 ? ' Comentários' : ' Comentário'}</h6>
					</div>						
				</div>	
				{comments && this.renderComments(comments)}		
			</div>
		);
	}
}

CommentsListing.propTypes = {
	comments: React.PropTypes.object.isRequired
}