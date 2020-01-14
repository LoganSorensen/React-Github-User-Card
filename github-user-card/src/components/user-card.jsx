import React from 'react';


const Card = props => {
    return (
        <div>
            <img src={props.users.avatar_url} alt='github avatar'></img>
            <h3>{props.users.name}</h3>
            <p>{props.users.login}</p>
            <a>{props.users.url}</a>
            <p>Followers: {props.users.followers}</p>
            <p>Following: {props.users.following}</p>
        </div>
    )
}

export default Card;