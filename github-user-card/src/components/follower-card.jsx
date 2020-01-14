import React from 'react';

const FollowerCard = props => {
    return (
        <div>
            <img src={props.follower.avatar_url} alt='github avatar'></img>
            <h3>{props.follower.name}</h3>
            <p>{props.follower.login}</p>
            <a>{props.follower.url}</a>
            <p>Followers: {props.follower.followers}</p>
            <p>Following: {props.follower.following}</p>
        </div>
    )
}

export default FollowerCard;