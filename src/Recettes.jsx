import { useEffect } from "react";
import Recettecard from "./RecetteCard";

import React, { useState } from 'react';
import { Link } from "react-router-dom";
const url = "https://www.themealdb.com/api/json/v1/1/search.php?s="



const Recettes = () => {

  const [recettes, setRecettes] = useState([])

  const getRecettes = async () => {
    const response = await fetch(url)
    const recettes = await response.json()
    setTimeout(() => {
      setRecettes(recettes.meals)
    }, 1000)
  }

  useEffect(() => {
    getRecettes()
  }, [])

  const recetteList = recettes.map((recette) => {
    return (
      <Recettecard key={recette.idMeal} recette={recette} />
    )
  });

  return (
    <div className="recettes">
      <Link className='App-link' to='/'>Home</Link>
      {recettes.length !== 0 ? recetteList : <h1>Chargement...</h1>}
    </div>
  )
  
  
}


export default Recettes;