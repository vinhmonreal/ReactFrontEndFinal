
import {  useRef, useState } from "react"
import GetDrinksDetailsByID from "../components/GetDrinksDetailsByID"
import Body from "../components/Body"

interface Drink {
    idDrink: string
    strDrink: string
    strDrinkThumb: string
}

export default function SearchForRecipe() {

    const [IDs, setIDs] = useState<string[]>([])
    const [NowLoading, setNowLoading] = useState<boolean>(false)
    const searchField = useRef<HTMLInputElement>(null)
    const searchFielBbyName = useRef<HTMLInputElement>(null)
    const [isNull, setIsNull] = useState<boolean>(false)
 
    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        setNowLoading(false)
        e.preventDefault()
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchField.current?.value}`)
        if (response.ok) {
            const data = await response.json()
            data.drink === null ? setIsNull(true) : setIDs((data.drinks.map((drink: Drink) => drink.idDrink)).slice(0, 30)) // api get overloaded if you try to get too m drinks at a time
            console.log(IDs)
            setNowLoading(true)
        }
    }

    async function handleSubmitSearchName(e: React.FormEvent<HTMLFormElement>) {
        setNowLoading(false)
        e.preventDefault()
        const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchFielBbyName.current?.value}`)
        if (response.ok) {
            const data = await response.json()
            console.log(data)
            data.drink === null? setIsNull(true) : setIDs((data.drinks.map((drink: Drink) => drink.idDrink)).slice(0, 30)) // api get overloaded if you try to get too m drinks at a time
            console.log(IDs)
            setNowLoading(true)
        }
    }    

    return (
        <Body sidebar={true} header={false} footer={true}  >
            <div className="form">
            <form onSubmit={handleSubmit}>
                <input className="form-input" type="text" ref={searchField} placeholder="Enter an ingredient" /> <br />
            </form>
            <br />
            <form onSubmit={handleSubmitSearchName} >
                <input className="form-input" type="text" ref={searchFielBbyName} placeholder=" Enter a drink name" /> <br />
            </form>
            {NowLoading && isNull==false ? <GetDrinksDetailsByID IDs={IDs} heading={''} route="Search Result" /> : <><h4 className="result-h1">Found Nothing</h4></>}
            </div><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
        </Body>
    )
}
