import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/Minha-logo.png';
import './Menu.css';
import Button from '../Button';
// import Buttonlink from './components/ButtonLink';

function Menu(){
    return (
        <nav className="Menu">
            <Link to="/">
                <img className="Logo" src={Logo} alt="Lucasflix logo"/>
            </Link>

            <Button as={Link} className="ButtonLink" to="/cadastro/Video">
                Novo vídeo
            </Button>
        </nav>
    )
}

export default Menu;