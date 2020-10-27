import React from 'react';

import './styles.css';

interface CardProps {
  data: string;
  editoria: string;
  thumbnail: string;
  title: string;
  slug: string;
}

const Card: React.FC<CardProps> = ( { title, data, editoria, thumbnail, slug }) => {
  
  return (
    <div className="card">
      <div className="card-topo">
        <div className="data">{data}</div>
        <div className="editoria"><strong>{editoria}</strong></div>
      </div>

      <div className="thumbnail" style={{backgroundImage: `url(${thumbnail})`}}></div>

      <h3>{title}</h3>
      <p className="slug">{slug}</p>
      <a href="#" className="btn"><strong>Saiba mais</strong></a>
    </div>
  )
}

export default Card;