import React from 'react';
import Logo from '../../assets/img/Minha-logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="/">
        <img className="Logo" src={Logo} alt="lucasflix logo"/>
      </a>
      <p>
        Web Site criado durante a
        {' '}
        <a href="https://www.alura.com.br/">
          #ImersãoReact da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
