import React, { useRef } from 'react'
import { useEffect } from 'react';
import { useGlobalContext } from '../Context'

function SearchForm() {

  const { setSearchTerm } = useGlobalContext();
  const searchValue = useRef();

  useEffect(() => {
    searchValue.current.focus();
  }, [])

  const searchCocktail = () => {
    setSearchTerm(searchValue.current.value);
  }
  const submitHandler = (e) => {
    e.preventDefault()
  }

  return (
    <section className="search-container">
      <div className='search-section'>
        <form onSubmit={submitHandler} className='form-section'>
          <label>Search your cocktail</label>
          <input
            type='text'
            name='name'
            id='name'
            ref={searchValue}
            onChange={searchCocktail}
          />
        </form>
      </div>
    </section>
  )
}

export default SearchForm