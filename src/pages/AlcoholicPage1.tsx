

import { useEffect, useState } from "react"
import { Mock_Data } from "../data/MOCK_DATA"
import { detailsDrink } from "../components/DisPlayDrinksOnPage"
import { ButtonAdd, ButtonRemove } from "../components/ButtonAddRemove"
import Body from "../components/Body"

const base_api_url = import.meta.env.VITE_APP_BASE_API

export default function AlcoholicDrinks() {

  const token = localStorage.getItem("token")
  const username = localStorage.getItem("username")
  const number = 10

  const [page, setPage] = useState<number>(0)
  const [arrayOfDrinks, setArrayOfDrinks] = useState<detailsDrink[]>([])
  
  useEffect(() =>{
    setArrayOfDrinks(Mock_Data.slice(page, page + number)) ///// still works
    console.log(arrayOfDrinks)
  }, [page])
  
  function handleNextClick() {
    page + number > Mock_Data.length ? setPage(page) : setPage(page + number)
  }
  
  function handlePreviousClick() {
    page - number < 0 ? setPage(0) : setPage(page - number)
    console.log(page)
  }
  
  return (
    <div>
        <div className="btt">
        <button onClick={handlePreviousClick} className="control-btt">Previous</button>
        <button onClick={handleNextClick} className="control-btt">Next</button>  
        </div>
        <div className="main">
        <DisplayDrinksOnPage arrayOfDrinks={arrayOfDrinks} route="" token={token} username={username}/>
        </div>
    </div>
  )
}

function DisplayDrinksOnPage ({ arrayOfDrinks, route,token, username}: { arrayOfDrinks: detailsDrink[], route: string, token:any, username:any }){
  
  return (
    <Body sidebar={true} header={false} footer={true}>
      <div className="main-b" key={'1'}>
        {arrayOfDrinks.map((drink) => {
          return (
            <div className="wrapper" key={drink.idDrink}>
              <h4>{drink.strDrink}</h4>
            <div key={drink.idDrink} className="ol">
                <img src={drink.strDrinkThumb}title={drink.strDrink}/>
                <div className="card-content">
                <p className="card-description">{drink.strInstructions}
                  {drink.strIngredient1} {drink.strMeasure1} 
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
                  {drink.strIngredient15} {drink.strMeasure15}</p>
                </div>
                <div>

              <button onClick={async () => {
                if (route === "UserPage") {
                  await ButtonRemove(drink.idDrink, token,username, base_api_url)
                  window.location.reload()
                }
                else {
                  await ButtonAdd(drink.idDrink, token, username, base_api_url)
                }
              }}>{route === "UserPage" ? "Remove from my list" : "Add to my list"}</button>
                </div>
            </div>
            </div>
          )
        })
        
      }
    </div>
    </Body>
  )
}
