import React from 'react';
import Logo from '../../assets/img/Minha-logo.png';
import { FooterBase } from './styles';

function Footer() {
  return (
    <FooterBase>
      <a href="https://github.com/lucasmartinsribeiro">
        <img src="https://icon-library.com/images/github-icon-white/github-icon-white-6.jpg" alt="Logo Github" />
      </a>
      <p>
        Desenvolvido por
        {' '}
        <a href="https://www.linkedin.com/in/lucas-51ribeiro/">
          Lucas Ribeiro
        </a>
        {' '}
        durante a
        {' '}
        <a href="https://www.alura.com.br/">
          #ImersãoReact da Alura
        </a>
      </p>
    </FooterBase>
  );
}

export default Footer;
