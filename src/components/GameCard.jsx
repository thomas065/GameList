import React from 'react';
import './gameCard.css';

function GameCard({ game }) {
    return (
        <div className='col'>
            <div className='card h-100 border border-3 border-dark rounded-3'>
                <img
                    src={game.image}
                    className='card-img-top image'
                    alt='...'
                />
                <div className='card-body bg-warning-subtle'>
                    <h4 className='card-text'>{game.name}</h4>
                    <p className='card-text'>Genre: {game.category}</p>
                    <p className='card-text'>{game.rating}</p>
                </div>
            </div>
        </div>
    );
}

export default GameCard;
