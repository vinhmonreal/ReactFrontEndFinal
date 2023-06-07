
export const ButtonAdd  = async (id:string, token:any, base_api_url:string) => {

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
    console.log(base_api_url)
    if(res.ok){
        alert("added to my list")
      console.log("added to my list")
    }
    else{
      console.log("error")
    }
    }
  
  export const ButtonRemove = async (id:string, token:string, base_api_url:string) => {
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
        console.log(base_api_url)
        if(res.ok){
            alert("removed from my list")
            console.log("removed from my list")
        }
        else{
            console.log("error")
        }
  }