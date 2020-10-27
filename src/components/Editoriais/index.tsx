import React from 'react';

import Card from '../Card';

import json from '../../assets/noticias.json';

import './styles.css';

//Editorias > 

const Editoriais: React.FC = () => {

  return (
    <section className="editoriais">
      <div className="container">

        <div className="editorial-topo">
          <h2>EDITORIAIS</h2>

          <div className="filters">
            <div className="order">Ordenar por: </div>
            <div className="filter">Filtrar por: </div>
          </div>
        </div>

        <div className="cards">
          <Card 
            key="1"
            title="Titulo" 
            data="Data"
            editoria="Editoria"
            thumbnail="2.jpg"
            slug="lorem ipsum"
          />
        </div>

      </div>

    </section>
  )
}

export default Editoriais;