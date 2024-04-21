// context.js
import React, { createContext, useState, useContext,useEffect } from 'react';

const MyContext = createContext();

export const useMyContext = () => useContext(MyContext);

export const MyContextProvider = ({ children }) => {
  const [pokemon, setPokemon] = useState(null);


  useEffect(() => {
    const getPokemonInfo = async () => {
      try {
        const response = await fetch(`http://localhost:5173/pizzas.json`);  
        const data = await response.json();
        setPokemon(data);
      } catch (error) {
        console.error('Error al obtener información del Pokémon:', error);
      }
    };

    getPokemonInfo();
  }, []);


  return (
    <MyContext.Provider value={{ pokemon,setPokemon }}>
      {children}
    </MyContext.Provider>
  );
};