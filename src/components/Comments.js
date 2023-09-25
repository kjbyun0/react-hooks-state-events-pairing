import React, { useState } from 'react';

function Comments({ comments }) {
    const [isReveal, setIsReveal] = useState(true);

    function commentsBtnOnClick() {
        setIsReveal(!isReveal);
    }

    function displayComments() {
        if (isReveal) {
            return (
                <div>
                    <h2>{comments.length} Comments</h2>
                    {
                        comments.map(comment => {
                            return (
                                <div key={comment.id}>
                                    <h4>{comment.user}</h4>
                                    <p>{comment.comment}</p>
                                </div>
                            );
                        })
                    }
                </div>
            );
        } else {
            return null;
        }
    }

    return (
        <div>
            <button onClick={commentsBtnOnClick}>{isReveal ? 'Hide' : 'Show'} Comments</button>
            <hr />
            {displayComments()}
        </div>

    );
}

export default Comments;