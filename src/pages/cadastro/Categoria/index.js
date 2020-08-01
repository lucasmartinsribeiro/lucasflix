import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageDefault from '../../../components/PageDefault';
import FormField from '../../../components/FormField';

function CadastroCategoria(){
  const valoresIniciais = {
    nome: '',
    descrição: '',
    cor: '',
  }

  const [categorias, setCategorias] = useState(['teste'])

  const [values, setValues] = useState(valoresIniciais)

  function setValue(chave, valor){
    //chave: nome, descrição, etc...
    setValues({
      ...values,
      [chave]: valor, //nome: 'valor'
    })
  }

  function handleChange(infosDoEvento){
    const {getAttribute, value} = infosDoEvento
    setValue(
      getAttribute('name'),
      value
      )
  }

    return (
      <PageDefault>
        <h1>
          Cadastro de Categoria: 
          {values.nome}
        </h1>

        <form onSubmit={function handleSubmit(infosDoEvento){
          infosDoEvento.preventDefault()
          //criando uma nova lista, e a lista já tem um item, então eu mantive esse item lá.
          //depois eu espalhei os items, e no final eu coloque um novo item na minha lista.
          setCategorias([
            ...categorias,
            values
          ])

          setValues(valoresIniciais)
        }}>

          <FormField
            label="Nome da Categoria"
            type="text"
            name="nome"
            values={values.nome}
            onChange={handleChange}
          />

          <FormField
            label="Descrição"
            type="????"
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

          <button>
            Cadastrar
          </button>
        </form>

        <ul>
          {categorias.map((categoria, indice) => {
            return(
              <li key={`${categoria}${indice}`}>
                {categoria.nome}
              </li>
            ) 
          })}
        </ul>

        <Link to="/">
          Ir para Home
        </Link>
      </PageDefault>
    )
}

export default CadastroCategoria;