import React from 'react';

import logoImg from '../../assets/images/logo.png';

import './styles.css';

const PageHeader = () => {
  return (
    <header className="page-header">
      <nav className="container">
        <img src={logoImg} alt="Minuto News"/>

        <ul>
          <a href="#">Início</a>
          <a href="#">Brasil</a>
          <a href="#">Mundo</a>
          <a href="#">Blogs</a>
          <a href="#">Assine</a>
        </ul>
      </nav>
    </header>
    
  )
}

export default PageHeader;