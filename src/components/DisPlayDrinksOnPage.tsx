
export function DisplayDrinksOnPage ({ arrayOfDrinks, route,token, base_api_url }: { arrayOfDrinks: detailsDrink[], route: string, token:any, base_api_url:string }){
 
  const ButtonAdd  = async (id:string, token:string) => {
    if(!token){
        alert("Please login!!!")
        return
    }
  const res = await fetch(`${base_api_url}/user/addfavdrinks`,{
    method : 'POST',
    headers : {
      'Content-Type' : 'application/json',
    },
    body:JSON.stringify({
      token: token,
      idDrink: id,
      strDrink: "dummy",
      strDrinkThumb: "dummy"
    })
  })
  if(res.ok){
      alert("added to my list")
    console.log("added to my list")
  }
  else{
    console.log("error")
  }
  }
  
  const ButtonRemove = async (id:string, token:string) => {

    if(!token){
        alert("Please login!!!")
        return
    }
    const res = await fetch(`${base_api_url}/user/removefavdrinks`,{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
        },
        body:JSON.stringify({
            token: token,
            idDrink: id,
        })
      })

    if(res.ok){
        alert("removed from my list")
        console.log("removed from my list")
    }
    else{
        console.log("error")
    }
  }

  return (
    <div>
      {arrayOfDrinks.map((drink) => {
        return (
          <div key={drink.idDrink}>
            <h1>{drink.strDrink}</h1>
            <img src={drink.strDrinkThumb} />
            <p>{drink.strInstructions}</p>
            <p>{drink.strIngredient1} {drink.strMeasure1}</p>
            <p>{drink.strIngredient2} {drink.strMeasure2}</p>
            <p>{drink.strIngredient3} {drink.strMeasure3}</p>
            <p>{drink.strIngredient4} {drink.strMeasure4}</p>
            <p>{drink.strIngredient5} {drink.strMeasure5}</p>
            <p>{drink.strIngredient6} {drink.strMeasure6}</p>
            <p>{drink.strIngredient7} {drink.strMeasure7}</p>
            <p>{drink.strIngredient8} {drink.strMeasure8}</p>
            <p>{drink.strIngredient9} {drink.strMeasure9}</p>
            <p>{drink.strIngredient10} {drink.strMeasure10}</p>
            <p>{drink.strIngredient11} {drink.strMeasure11}</p>
            <p>{drink.strIngredient12} {drink.strMeasure12}</p>
            <p>{drink.strIngredient13} {drink.strMeasure13}</p>
            <p>{drink.strIngredient14} {drink.strMeasure14}</p>
            <p>{drink.strIngredient15} {drink.strMeasure15}</p>
            <button onClick={async () => {
              if (route === "UserPage") {
                  await ButtonRemove(drink.idDrink, token)
                  window.location.reload()
              }
              else {
                  await ButtonAdd(drink.idDrink, token)
              }
              }}>{route === "UserPage" ? "Remove from my list" : "Add to my list"}</button>
          </div>
        )
      })}
    </div>
  )
}

export interface detailsDrink {
  idDrink: any;
  strDrink: any;
  strDrinkThumb: any;
  strInstructions: any;
  strIngredient1: any;
  strMeasure1: any;
  strIngredient2: any;
  strMeasure2: any;
  strIngredient3: any;
  strMeasure3: any;
  strIngredient4: any;
  strMeasure4: any;
  strIngredient5: any;
  strMeasure5: any;
  strIngredient6: any;
  strMeasure6: any;
  strIngredient7: any;
  strMeasure7: any;
  strIngredient8: any;
  strMeasure8: any;
  strIngredient9: any;
  strMeasure9: any;
  strIngredient10: any;
  strMeasure10: any;
  strIngredient11: any;
  strMeasure11: any;
  strIngredient12: any;
  strMeasure12: any;
  strIngredient13: any;
  strMeasure13: any;
  strIngredient14: any;
  strMeasure14: any;
  strIngredient15: any;
  strMeasure15: any;
}