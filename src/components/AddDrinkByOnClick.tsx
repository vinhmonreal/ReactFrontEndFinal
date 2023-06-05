import { useNavigate } from "react-router-dom"

const base_api_url = import.meta.env.VITE_BASE_API_URL


export default async function AddDrinkByOnClick(idDrink:string) {

    const token = localStorage.getItem('token') 
    const navigate = useNavigate()
    if (!token) return navigate('/login')



    const res = await fetch (`${base_api_url}/user/addfavdrinks`, {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            token: token,
            idDrink: idDrink,
            strDrink: "dummy",
            strDrinkThumb: "dymmy"
        })
    })
    if (res.ok) {
        const data = await res.json()
        console.log("success added drink")
        console.log(data)
    }
   
}