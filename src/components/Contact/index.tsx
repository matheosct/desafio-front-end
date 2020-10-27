import React from 'react';

import Input from '../Input';

import './styles.css';

const Contact = () => {
  return (
    <section className="contact">

      <div className="container">
        <h2>ENTRE EM CONTATO</h2>

        <div className="content">
          <div className="address">

            <h3>Onde nos achar</h3>

            <div className="info">
              Rua dos Alfeneiros, número 4 <br/>
              00-91102 <br/>
              Little Whitning <br/>
              Londres/Inglatera <br/>
            </div>

            <div className="info">
              (21) 4004 - 1234 <br/>
              (21) 4004 - 4321 <br/>
            </div>

            <div className="info">
              contato@minutonews.com.br <br/>
            </div>

            <div className="info">
              Aberto de segunda a sexta das 09h as 19h
            </div>
          </div>

          <form className="form">
            <h3>Mande uma mensagem</h3>

            <Input
              name="name"
              label="Seu nome:"
              id="name"
            />
            <Input
              name="email"
              label="Email:"
              id="email"
            />
            <Input
              name="message"
              label="Mensagem:"
              id="message"
            />

            <div className="btn">
              Enviar
            </div>          
          </form> 

        </div>
      </div>

    </section>
  )
}

export default Contact;