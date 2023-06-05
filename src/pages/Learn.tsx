
// create input field and button to search for ingredients from www.thecocktaildb.com/api/json/v1/1/search.php?i=vodka

import { useEffect, useState } from "react";

interface Ingredient {
    idIngredient: string;
    strIngredient: string;
    strDescription: string;
    strType: string;
    strAlcohol: string;
    strABV: string;
}

export default function Learn() {
    const [search, setSearch] = useState("");
    const [ingredients, setIngredients] = useState<Ingredient[]>([]);
    
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
    }, [search]);
    
    return (
        <div >
        <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
        />
        <button onClick={() => setSearch("")}>Clear</button>
        {ingredients.length === 0 ? (
            <p>No ingredients found</p>
        ) : (
            ingredients.map((ingredient) => (
            <div key={ingredient.idIngredient} >
                <h3>{ingredient.strIngredient}</h3>
                <p>{ingredient.strDescription}</p>
            </div>
            ))
        )}
        </div>
    );
}