// import { useEffect, useState } from "react"
// import { Spinner } from "react-bootstrap"

import GetDrinksDetailsByID from "./GetDrinksDetailsByID"


//  export interface Drink {
//     idDrink: string
//     strDrink: string
//     strDrinkThumb: string

//   }

  



  
//   export default function AlcoholicDrinks() {
//     const [drinks, setDrinks] = useState<Drink[]>([])
  
//     useEffect(() => {
//       (async () => {
//         const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Alcoholic')
//         if (response.ok) {
//           const data = await response.json()
//           setDrinks(data.drinks)
//           console.log(data)
//         }
//       })()
//     }, [])
  
//     return (
//       <div className="section" >
//         {drinks.length === 0 ? <Spinner animation="grow" /> : drinks.map((drink) => (
//               <div key={drink.idDrink} className="card">
//                 <h3>{drink.strDrink}</h3>
//                 <img src={drink.strDrinkThumb} alt={drink.strDrink} />
//               </div>
//             ))}
//       </div>
//     )
          
//   }


export default function AlcoholicDrinks() {
  const IDs = ["15395", "15423", "14588","15346","17060","15288", "13899", "15300", "13581", "14598", "17105", "14029", "13940", "14229", "16108", "15200", "17831", "16943", "15675", "17832", "16405", "14564"]
  const headding = "Alcoholic Drinks"

  return (
    <>
      <GetDrinksDetailsByID IDs={IDs} heading={headding} route="" />
    </>
  )
}