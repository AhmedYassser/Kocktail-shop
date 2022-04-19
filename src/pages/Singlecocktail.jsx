import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom'
import Loading from '../Componants/Loading'

const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i='

function Singlecocktail() {

  const { id } = useParams();
  const [lodaing, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);

  useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const respons = await fetch(`${url}${id}`);
        const data = await respons.json();
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)

        } else {

          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
        setLoading(false);
      }
      setLoading(false)
    }

    getCocktail();
  }, [id])

  if (lodaing) {
    return <Loading />
  }
  if (!cocktail) {
    return <h3>no cocktail to display</h3>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail;
    return (
      <section>
        <div className='cocktail-details'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span>ingredients :</span>
              {ingredients.map((item, index) => {
                return item ? <span className='ingrediant-data' key={index}> {item}</span> : null
              })}
            </p>
          </div>
        </div>
      </section>
    )
  }
}
export default Singlecocktail