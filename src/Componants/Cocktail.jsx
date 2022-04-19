import React from 'react'
import { Link } from 'react-router-dom'

function Cocktail({ id, name, image, info, glass }) {


  return (
    <>
      <section className='coctails-container'>
        <div>
          <img src={image} alt={name} className="section-img"/>
        </div>
        <div className='footer-section'>
          <h3>Name : {name}</h3>
          <h4>Glass : {glass}</h4>
          <p>Type : {info}</p>
          <Link to={`/coctail/${id}`} className='btn-details'>
            details
          </Link>
        </div>
      </section>
    </>
  )
}

export default Cocktail