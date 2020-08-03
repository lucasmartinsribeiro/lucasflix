import React from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../components/PageDefault';
import './index.css';

function NotFound() {
  return (
    <PageDefault>
      <>
        <h1 className="title-not-found">Página não foi encontrada</h1>

        <iframe src="https://lucasmartinsribeiro.github.io/ImersaoGameDev/" className="iframe" scrolling="no" />

        <Link to="/">
          <p>Retornar a Página Inicial</p>
        </Link>

      </>
    </PageDefault>
  );
}

export default NotFound;
