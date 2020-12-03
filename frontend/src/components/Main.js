import React from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const Main = ({ onEditAvatar, onEditProfile, onAddPlace, onCardClick, onCardLike, onCardDelete, cards }) => {
    const currentUser = React.useContext(CurrentUserContext);
    return (
        <main className="content page__content">
            <section className="profile">
                <div className="profile__avatar-button" onClick={onEditAvatar}>
                    <img className="profile__avatar" src={currentUser.avatar} alt="аватар" />
                </div>
                <div className="profile__info">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__button-edit" type="button"
                        onClick={onEditProfile} />
                    <p className="profile__profession">{currentUser.about}</p>
                </div>
                <button className="profile__button-add" type="button" onClick={onAddPlace} />
            </section>

            <section className="elements">
                <ul className="elements__list">
                    {cards.map((card) => <Card key={card._id} onCardClick={onCardClick} card={card}
                        onCardLike={onCardLike} onCardDelete={onCardDelete} />)}
                </ul>
            </section>
        </main>
    );
}

export default Main;