import React from "react";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Card = ({ card, onCardClick, onCardLike, onCardDelete }) => {
    const currentUser = React.useContext(CurrentUserContext);
    const isOwn = card.owner === currentUser._id;
    const isLiked = card.likes.some(i => i === currentUser._id);

    const handleLikeClick = () => {
        onCardLike(card);
    }

    const handleDeleteClick = () => {
        onCardDelete(card);
    }

    const handleClick = () => {
        onCardClick(card);
    }

    return (
        <li className="card">
            <button
                className={`${isOwn ? `card__remove-button card__remove-button_show` : `card__remove-button`}`}
                type="button" onClick={handleDeleteClick} />
            <img className="card__image" src={card.link} alt={card.name} onClick={handleClick} />
            <div className="card__description">
                <p className="card__name">{card.name}</p>
                <div className="card__like-cover">
                    <button
                        className={`${isLiked ? `card__like card__like_active` : `card__like`}`}
                        type="button" onClick={handleLikeClick} />
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;