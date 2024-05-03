import React from 'react';
import Comment from './Comment';

const CommentsList = ({ comments }) => {
    return (
        <div className=''>
            {comments.map((comment) => (
                <Comment key={comment.id} comment={comment} />
            ))}
        </div>
    );
};

export default CommentsList;
