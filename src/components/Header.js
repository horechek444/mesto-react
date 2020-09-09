import React from "react";
import logo from '../images/logo.svg';

function Header() {
    return (
        <header className="header page__header">
            <a className="logo header__logo opacity" >
                <img className="logo__image" src={logo} alt="Логотип сайта Место" />
            </a>
        </header>
    );
}

export default Header;