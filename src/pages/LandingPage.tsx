import Body from "../components/Body";

export default function LandingPage() {
    return (
        <Body sidebar={true} header={true} footer={true}>
            <div className="landing-header">
                <h1>Welcome to My Drinks Full Stack Web App</h1>
                <h4>
                    This is a website where you can find and share cocktail recipes as well as beverages. You can
                    also learn about the different types of cocktails and more...
                </h4> <br />
            </div>
            <div className="items">
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/gin-Medium.png" alt="" /><p>Gin</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/vodka-Medium.png" alt="" /><p>Vodka</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/rum-Medium.png" alt="" /><p>Rum</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Barenjager-Medium.png" alt="" /><p>Barenjager</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Bacardi-Medium.png" alt="" /><p>Bacardi</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Black%20Rum-Medium.png" alt="" /><p>Black Rum</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Galliano-Medium.png" alt="" /><p>Galliano</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Gold rum-Medium.png" alt="" /><p>Gold rum</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Ricard-Medium.png" alt="" /><p>Ricard</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Tia Maria-Medium.png" alt="" /><p>Tia Maria</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Ouzo-Medium.png" alt="" /><p>Ouzo</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Port-Medium.png" alt="" /><p>Port</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Passoa-Medium.png" alt="" /><p>Passoa</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Pisco-Medium.png" alt="" /><p>Pisco</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Aejo Rum-Medium.png" alt="" /><p>Aejo Rum</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Averna-Medium.png" alt="" /><p>Averna</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Advocaat-Medium.png" alt="" /><p>Advocaat</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Martini Rosso-Medium.png" alt="" /><p>Martini Rosso</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Martini Extra Dry-Medium.png" alt="" /><p>Martini Extra Dry</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Mezcal-Medium.png" alt="" /><p>Mezcal</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Nocino-Medium.png" alt="" /><p>Nocino</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Curacao-Medium.png" alt="" /><p>Curacao</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Zima-Medium.png" alt="" /><p>Zima</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Aperol-Medium.png" alt="" /><p>Aperol</p></li>
                <li><img className="item" src="https://www.thecocktaildb.com/images/ingredients/Red Bull-Medium.png" alt="" /><p>Red Bull</p></li>
            </div>
        </Body>
    );
    }