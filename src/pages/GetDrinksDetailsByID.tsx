import { useContext, useEffect, useState } from "react";
import { detailsDrink } from "../components/DisPlayDrinksOnPage";
import { ButtonAdd, ButtonRemove } from "../components/ButtonAddRemove";
import { AuthContext } from "../contexts/UserProvider";




export default function GetDrinksDetailsByID  ({IDs, heading, route}:{IDs:string[], heading:string, route:string}) {
    const base_api_url = import.meta.env.VITE_APP_BASE_API
    const { user } = useContext(AuthContext)
    const token = user.token
    const [resultArray, setResultArray] = useState<detailsDrink[]>([]);
    const [loading, setLoading] = useState(true)
    const result: detailsDrink[] = [];

    useEffect(() => {
        const fetchData = async () => {
            for (let i = 0; i < IDs.length; i++) {
                const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${IDs[i]}`)
                const data = await response.json()
                result.push(data.drinks[0])
            }
            //get unique values from array
            const map = new Map(result.map((item) => [item.idDrink, item]));
            const unique = [...map.values()];
            console.log(unique, "unique ")
            setLoading(false)
            setResultArray(unique)
        }
        fetchData()
    }
        , [])  




    return (
        <div>
            <h1 className="result-h1">{heading.toLocaleUpperCase()}</h1>
            {loading ? <div className="result-h1">Loading...</div> : resultArray.map((drink) => (
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
            )}
        </div>
    )
}







 