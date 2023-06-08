
import { useEffect, useState } from "react";
import Body from "../components/Body";

interface Ingredient {
    idIngredient: string | null;
    strIngredient: string | null;
    strDescription: string | null;
    strType: string | null;
    strAlcohol: string | null;
    strABV: string | undefined;
}

type Ingredients = Ingredient[] | null;

export default function Learn() {
    
    const [search, setSearch] = useState("");
    const [ingredients, setIngredients] = useState<Ingredients>(null);

    useEffect(() => {
        (async () => {
            const response = await fetch(
                `https://www.thecocktaildb.com/api/json/v1/1/search.php?i=${search}`
            );
            if (response.ok) {
                const data = await response.json();
                setIngredients(data.ingredients);
                console.log(data);
            }
        })();
    }
    , [search]);

    return (
        <Body sidebar={true} header={false}footer={false}>
        <div className="form" id="form">
            <input
                className="form-input"
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Learn an ingredient"
            />
            {ingredients === null ? (
                <p className="result-h1">No ingredients found</p>
            ) : (
                ingredients?.map((ingredient) => (
                    <div className="learn-card" key={'learncard'}>
                        <h3>{ingredient.strIngredient}</h3>
                        <p>{ingredient.strDescription}</p>
                        <p>TYPE : {ingredient.strType}</p>
                        <p>ALCOHOL : {ingredient.strAlcohol}</p>
                        <p>ABV : {ingredient.strABV}</p>
                    </div>

                    
                ))
            )}
        </div>
        </Body>
    );
}
