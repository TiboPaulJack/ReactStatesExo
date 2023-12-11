



const Recettecard = ({recette}) => {

  return (
    <div className="card">
      <h2>{recette.strMeal}</h2>
      <img src={recette.strMealThumb} alt={recette.strMeal} />
      <p>{recette.strInstructions}</p>
    </div>
  )


}


export default Recettecard;