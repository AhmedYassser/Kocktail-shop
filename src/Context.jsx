import React, { useCallback, useContext, useEffect, useState } from "react"

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s='
const AppContext = React.createContext()

const AppProvider = ({ children }) => {

  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('a');
  const [coctails, setCoctails] = useState([]);

  const FetchData = useCallback(async () => {
    try {
      setLoading(true);
      const respons = await fetch(`${url}${searchTerm}`);
      const data = await respons.json();
      const { drinks } = data;
      if (drinks) {
        const newCocktails = drinks.map((item) => {
          const {
            idDrink,
            strDrink,
            strDrinkThumb,
            strAlcoholic,
            strGlass,
          } = item

          return {
            id: idDrink,
            name: strDrink,
            image: strDrinkThumb,
            info: strAlcoholic,
            glass: strGlass,
          }
        })
        setCoctails(newCocktails)
      } else {
        setCoctails([]);
      }
      setLoading(false);
    } catch (error) {
      console.log(error)
      setLoading(false);
    }
  }, [searchTerm])

  useEffect(() => {
    FetchData();
  }, [searchTerm, FetchData]);



  return <AppContext.Provider value={{
    loading,
    coctails,
    setSearchTerm,
  }}>
    {children}
  </AppContext.Provider>
}

export const useGlobalContext = () => {
  return useContext(AppContext);
}

export { AppContext, AppProvider }
