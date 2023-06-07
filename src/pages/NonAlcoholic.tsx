

import { useEffect, useState } from "react"
import { Mock_Data_Nonalcoholic } from "../components/MOCK_DATA_NON_ALCOHOLIC"
import { detailsDrink } from "../components/DisPlayDrinksOnPage"
import { ButtonAdd, ButtonRemove } from "../components/ButtonAddRemove"
import Body from "../components/Body"
const base_api_url = import.meta.env.VITE_APP_BASE_API


export default function NonAlcoholicDrinks() {
    const token = localStorage.getItem("token")
    const number = 10

    
  
  
    const [page, setPage] = useState<number>(0)
    const [arrayOfDrinks, setArrayOfDrinks] = useState<detailsDrink[]>([])
  
    useEffect(() =>{
      setArrayOfDrinks(Mock_Data_Nonalcoholic.slice(page, page + number))
      console.log(arrayOfDrinks)
    }, [page])
  
    function handleNextClick() {
      page > Mock_Data_Nonalcoholic.length ? <button disabled></button> : setPage(page + number)
    }
  
    function handlePreviousClick() {
      page - number < 0 ? setPage(0) : setPage(page - number)
      console.log(page)
    }
    
    return (
      <div>
        <DisplayDrinksOnPage arrayOfDrinks={arrayOfDrinks} route="" token={token}/>
        <div className="btt">

        <button onClick={handlePreviousClick} className="control-btt">Previous</button>
        <button onClick={handleNextClick} className="control-btt">Next</button>  
        </div>
      </div>
    )
  }

  function DisplayDrinksOnPage ({ arrayOfDrinks, route,token }: { arrayOfDrinks: detailsDrink[], route: string, token:any }){
    return (
      <Body sidebar={true} header={true} >
        {arrayOfDrinks.map((drink) => {
          return (
            <div key={drink.idDrink} className="card">
              <h1>{drink.strDrink}</h1>
              <img src={drink.strDrinkThumb} className="card-img"/>
              <p>{drink.strInstructions}</p>
              <p>{drink.strIngredient1} {drink.strMeasure1} 
                {drink.strIngredient2} {drink.strMeasure2} 
                {drink.strIngredient3} {drink.strMeasure3} 
                {drink.strIngredient4} {drink.strMeasure4}
                {drink.strIngredient5} {drink.strMeasure5}
                {drink.strIngredient6} {drink.strMeasure6}
                {drink.strIngredient7} {drink.strMeasure7}
                {drink.strIngredient8} {drink.strMeasure8}
                {drink.strIngredient9} {drink.strMeasure9}
                {drink.strIngredient10} {drink.strMeasure10}
                {drink.strIngredient11} {drink.strMeasure11}
                {drink.strIngredient12} {drink.strMeasure12}
                {drink.strIngredient13} {drink.strMeasure13}
                {drink.strIngredient14} {drink.strMeasure14}
                {drink.strIngredient15} {drink.strMeasure15}
              </p>
              
              <button onClick={async () => {
                if (route === "UserPage") {
                    await ButtonRemove(drink.idDrink, token, base_api_url)
                    window.location.reload()
                }
                else {
                    await ButtonAdd(drink.idDrink, token, base_api_url)
                }
                }}>{route === "UserPage" ? "Remove from my list" : "Add to my list"}</button>
            </div>
          )
        })}
      </Body>
    )
  }
  
  
  
    