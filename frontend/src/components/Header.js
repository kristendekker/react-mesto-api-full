import React from "react";
import logo from '../images/header-logo.svg';
import { useHistory, useLocation } from 'react-router-dom';

const Header = ({ onSignOut, loggedIn, email }) => {
    const location = useLocation();
    const history = useHistory();
    const [open, setOpen] = React.useState(false);

    const handleLinkName = () => {
        if (location.pathname === '/signin') {
            return 'Регистрация';
        } else if (location.pathname === '/') {
            return 'Выйти';
        } else {
            return 'Войти';
        }
    }

    const handleButtonClick = () => {
        if (handleLinkName() === 'Регистрация') {
            history.push('/signup');
        } else if (handleLinkName() === 'Войти') {
            history.push('/signin');
        } else {
            onSignOut();
        }
    }

    const handleMenuClick = () => {
        setOpen(!open);
    }

    const handleClassName = () => {
        if (loggedIn && open) {
            return "header__cover header__cover_type_vertical header__cover_type_active";
        } else if (!loggedIn) {
            return "header__cover";
        } else if (loggedIn) {
            return "header__cover header__cover_type_vertical";
        }
    }

    return (
        <header className={`${loggedIn && open ? `header page__header header_type_active` : `header page__header`}`}>
                <img className="header__logo" src={logo} alt="Логотип сайта Место" />
            <div className={handleClassName()}>
                <span
                    className={`${loggedIn ? `header__email header__email_type_active` : `header__email`}`}>{email}</span>
                <button
                    className={`${loggedIn ? `header__button header__button_type_log-out` : `header__button`}`}
                    onClick={handleButtonClick}>{handleLinkName()}</button>
            </div>
            <div onClick={handleMenuClick} className={`${loggedIn ? `header__menu-wrapper header__menu-wrapper_type_active` : `header__menu-wrapper`}`}>
                <div className={open ? `header__menu header__menu_type_active` : `header__menu`} />
            </div>
        </header>
    );
}

export default Header;