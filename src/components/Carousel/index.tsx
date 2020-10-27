import React, { useEffect, useState } from 'react';
import json from '../../assets/slide.json';

import './styles.css'

interface Slides {
  nome: string;
}

const Carousel = () => {

  const [ slides, setSlides ] = useState<Slides[]>([]);

  useEffect(() => {
    setSlides(json);
  }, [slides]);

  function Teste() {
    alert(json[0].imagens[1])
  }

  return (
    <>
      <div id="items-wrapper">
        <div id="items">
          <div className="item"><img alt="1" src={require('../../assets/slide/' + `${json[0].imagens[1]}`)}/></div>
          
        </div>
      </div>

      <div className="elements">
        <div className="arrows">
          <div className="prev arrow" onClick={Teste}>&#10094;</div>
          <div className="next arrow" onClick={Teste}>&#10095;</div>
        </div>

        <div className="dots">
          <div className="dot"></div>
          <div className="dot"></div>
        </div>
      </div>
    </>
  )
}

export default Carousel