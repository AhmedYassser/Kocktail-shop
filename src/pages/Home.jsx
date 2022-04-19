import React from 'react'
import CocktailList from '../Componants/CocktailList'
import SearchForm from '../Componants/SearchForm'

function Home() {
  return (
    <>
      <section className='HOME-section'>
        <SearchForm />
        <CocktailList />
      </section>
    </>
  )
}

export default Home