import React from 'react';

import './styles.css';

const Acessos = () => {
  return (
    <>
      <hr className="container-fluid"/>

      <section className="acessos">

        <div className="container">
          <h2>EDITORIAIS MAIS ACESSADAS</h2>

          <div className="content">
            <div className="graph"></div>

            <div className="paragraphs">
              <h3>Título aqui</h3>
              <div className="text">
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. </p>
              </div>
            </div>

          </div>
        </div>

      </section>

      <hr className="container-fluid"/>

    </>
  )
}

export default Acessos;