import React, { useState } from 'react';

function Votes({ upVotes, downVotes}) {
    // if these two values need to be saved, it needs to be sent to App by using a callback.
    const [votes, setVotes] = useState({
        upVotes: upVotes,
        downVotes: downVotes,
    });

    function handleVotesOnClick(e) {
        if (e.target.name === 'btnUpVote') {
            setVotes({...votes, upVotes: votes.upVotes+1});
        } else {
            setVotes({...votes, downVotes: votes.downVotes+1});
        }
    }

    return (
        <div>
            <button name='btnUpVote' onClick={handleVotesOnClick}>{votes.upVotes} 👍</button>
            <button name='btnDnVote' onClick={handleVotesOnClick}>{votes.downVotes} 👎</button>
        </div>

    );
}

export default Votes;