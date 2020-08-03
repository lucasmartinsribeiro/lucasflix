import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';
import Button from '../../../components/Button';
import useForm from '../../../hooks/useForm';

function CadastroCategoria() {
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  };

  const { handleChange, values, clearForm } = useForm(valoresIniciais);

  const [categorias, setCategorias] = useState([]);

  // ================================================

  useEffect(() => {
    const URL = window.location.hostname.includes('localhost')
      ? 'http://localhost:8080/categorias'
      : 'https://dev-lucasflix.herokuapp.com/categorias';
    fetch(URL)
      .then(async (respostaDoServidor) => {
        const resposta = await respostaDoServidor.json();
        setCategorias([
          ...resposta,
        ]);
      });

  // setTimeout(() => {
  //   setCategorias([
  //     ...categorias,
  //     {
  //       id: 1,
  //       nome: 'Jogos memoráveis',
  //       descricao: 'Uma categoria de partidas de futebol que são memoráveis para mim.',
  //       cor: '#00C86F',
  //     },
  //     {
  //       id: 2,
  //       nome: 'Músicas',
  //       descricao: 'Uma categoria das músicas que eu mais gosto.',
  //       cor: '#6BD1FF',
  //     },
  //   ]);
  // }, 4 * 1000);
  }, []);

  return (
    <PageDefault>
      <h1>
        Cadastro de Categoria:
        {values.nome}
      </h1>

      <form onSubmit={function handleSubmit(infosDoEvento) {
        infosDoEvento.preventDefault();
        // criando uma nova lista, e a lista já tem um item, então eu mantive esse item lá.
        // depois eu espalhei os items, e no final eu coloque um novo item na minha lista.
        setCategorias([
          ...categorias,
          values,
        ]);

        clearForm();
      }}
      >

        <FormField
          label="Nome da Categoria"
          type="text"
          name="nome"
          values={values.nome}
          onChange={handleChange}
        />

        <FormField
          label="Descrição"
          type="textarea"
          name="descricao"
          values={values.descricao}
          onChange={handleChange}
        />
        {/* <div>
            <label>
                Descrição:
                <textarea
                  type="text"
                  value={values.descricao}
                  name="descricao"
                  onChange={handleChange}
                />
              </label>
          </div> */}

        <FormField
          label="Cor"
          type="color"
          name="cor"
          values={values.cor}
          onChange={handleChange}
        />
        {/* <div>
            <label>
                Cor:
                <input
                  type="color"
                  value={values.cor}
                  name="cor"
                  onChange={handleChange}
                />
              </label>
          </div> */}

        <Button>
          Cadastrar
        </Button>
      </form>

      {categorias.length === 0 && (
        <div>
          Loading...
        </div>
      )}

      <ul>
        {categorias.map((categoria) => (
          <li key={`${categoria.titulo}`}>
            {categoria.titulo}
          </li>
        ))}
      </ul>

      <Link to="/">
        Ir para Home
      </Link>
    </PageDefault>
  );
}

export default CadastroCategoria;
