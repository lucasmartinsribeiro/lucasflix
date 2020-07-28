import React from 'react';
import Logo from '../../assets/img/Minha-logo.png';
import './Menu.css';
import Button from '../Button';
// import Buttonlink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <a href="/">
                <img className="Logo" src={Logo} alt="lucasflix logo"/>
            </a>

            <Button as="a" className="ButtonLink" href="/">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;