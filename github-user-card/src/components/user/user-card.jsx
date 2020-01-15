import React from 'react';
import '../card.scss';

const Card = props => {
    return (
        <div className='user-card'>
            <img src={props.users.avatar_url} alt='github avatar'></img>
            <div className='card-info'>
                <h2>{props.users.login}</h2>
                <a href={props.users.url}>{props.users.url}</a>
                <p>Followers: {props.users.followers}</p>
                <p>Following: {props.users.following}</p>
            </div>
        </div>
    )
}

export default Card;