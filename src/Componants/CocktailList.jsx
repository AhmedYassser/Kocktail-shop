import React from 'react'
import Cocktail from './Cocktail'
import { useGlobalContext } from '../Context'
import Loading from './Loading'


function CocktailList() {

  const { loading, coctails } = useGlobalContext();
  if (loading) {
    return <Loading />
  }
  if (coctails.length < 1) {
    return <div>
      <h2 className='error-msg'>No coctails matched your creteria</h2>
    </div>
  }

  return (
    <section className='cocktail-section'>
      <h3 className='header'>Your cocktails</h3>
      <div className='coctails-center'>
        
        {coctails.map((item) => {
          return <Cocktail key={item.id} {...item} />
        })}
      </div>
    </section>
  )
}

export default CocktailList