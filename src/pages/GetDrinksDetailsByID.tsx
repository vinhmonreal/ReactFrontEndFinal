import { useEffect, useState } from "react";


interface detailsDrink {
    idDrink: string ;
    strDrink: string | undefined;
    strDrinkAlternate: string | undefined;
    strTags: string | undefined;
    strVideo: string | undefined;
    strCategory: string | undefined;
    strIBA: string | undefined;
    strAlcoholic: string | undefined;
    strGlass: string | undefined;
    strInstructions: string | undefined;
    strInstructionsES: string | undefined;
    strInstructionsDE: string | undefined;
    strInstructionsFR: string | undefined;
    strInstructionsIT: string | undefined;
    strDrinkThumb: string | undefined;
    strIngredient1: string | undefined;
    strIngredient2: string | undefined;
    strIngredient3: string | undefined;
    strIngredient4: string | undefined;
    strIngredient5: string | undefined;
    strIngredient6: string | undefined;
    strIngredient7: string | undefined;
    strIngredient8: string | undefined;
    strIngredient9: string | undefined;
    strIngredient10: string | undefined;
    strIngredient11: string | undefined;
    strIngredient12: string | undefined;
    strIngredient13: string | undefined;
    strIngredient14: string | undefined;
    strIngredient15: string | undefined;
    strMeasure1: string | undefined;
    strMeasure2: string | undefined;
    strMeasure3: string | undefined;
    strMeasure4: string | undefined;
    strMeasure5: string | undefined;
    strMeasure6: string | undefined;
    strMeasure7: string | undefined;
    strMeasure8: string | undefined;
    strMeasure9: string | undefined;
    strMeasure10: string | undefined;
    strMeasure11: string | undefined;
    strMeasure12: string | undefined;
    strMeasure13: string | undefined;
    strMeasure14: string | undefined;
    strMeasure15: string | undefined;
    strCreativeCommonsConfirmed: string | undefined;
    dateModified: string | undefined;
}

export default function GetDrinksDetailsByID  ({IDs, heading, route}:{IDs:string[], heading:string, route:string}) {
    const base_api_url = import.meta.env.VITE_APP_BASE_API
    const token = localStorage.getItem("token")
    const [resultArray, setResultArray] = useState<detailsDrink[]>([]);
    const [loading, setLoading] = useState(true)
    const result: detailsDrink[] = [];
    
    const ButtonAdd  = async (id:string, token:any) => {
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
          console.log("added to my list")
        }
        else{
          console.log("error")
        }
        }

    const ButtonRemove = async (id:string, token:any) => {
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
                console.log("removed from my list")
            }
            else{
                console.log("error")
            }
    }


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
            <h1>{heading}</h1>
            {loading ? <div>Loading...</div> : resultArray.map((drink) => (
                
                <div key={drink.idDrink}>
                    <h1>{drink.strDrink} /ID: {drink.idDrink}</h1>
                    <img src={drink.strDrinkThumb} alt={drink.strDrink} />
                    <p>{drink.strInstructions}</p>
                    <p>{drink.strCategory}</p>
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
            )}
        </div>
    )
}







    
// import * as React from 'react';
// import { styled } from '@mui/material/styles';
// import Card from '@mui/material/Card';
// import CardHeader from '@mui/material/CardHeader';
// import CardMedia from '@mui/material/CardMedia';
// import CardContent from '@mui/material/CardContent';
// import CardActions from '@mui/material/CardActions';
// import Collapse from '@mui/material/Collapse';
// import Avatar from '@mui/material/Avatar';
// import IconButton, { IconButtonProps } from '@mui/material/IconButton';
// import Typography from '@mui/material/Typography';
// import { red } from '@mui/material/colors';
// import FavoriteIcon from '@mui/icons-material/Favorite';
// import ShareIcon from '@mui/icons-material/Share';
// import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
// import MoreVertIcon from '@mui/icons-material/MoreVert';

// interface ExpandMoreProps extends IconButtonProps {
//   expand: boolean;
// }

// const ExpandMore = styled((props: ExpandMoreProps) => {
//   const { expand, ...other } = props;
//   return <IconButton {...other} />;
// })(({ theme, expand }) => ({
//   transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: theme.transitions.create('transform', {
//     duration: theme.transitions.duration.shortest,
//   }),
// }));

// export default function RecipeReviewCard() {
//   const [expanded, setExpanded] = React.useState(false);

//   const handleExpandClick = () => {
//     setExpanded(!expanded);
//   };

//   return (
//     <Card sx={{ maxWidth: 345 }}>
//       <CardHeader
//         avatar={
//           <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
//             R
//           </Avatar>
//         }
//         action={
//           <IconButton aria-label="settings">
//             <MoreVertIcon />
//           </IconButton>
//         }
//         title="Shrimp and Chorizo Paella"
//         subheader="September 14, 2016"
//       />
//       <CardMedia
//         component="img"
//         height="194"
//         image="/static/images/cards/paella.jpg"
//         alt="Paella dish"
//       />
//       <CardContent>
//         <Typography variant="body2" color="text.secondary">
//           This impressive paella is a perfect party dish and a fun meal to cook
//           together with your guests. Add 1 cup of frozen peas along with the mussels,
//           if you like.
//         </Typography>
//       </CardContent>
//       <CardActions disableSpacing>
//         <IconButton aria-label="add to favorites">
//           <FavoriteIcon />
//         </IconButton>
//         <IconButton aria-label="share">
//           <ShareIcon />
//         </IconButton>
//         <ExpandMore
//           expand={expanded}
//           onClick={handleExpandClick}
//           aria-expanded={expanded}
//           aria-label="show more"
//         >
//           <ExpandMoreIcon />
//         </ExpandMore>
//       </CardActions>
//       <Collapse in={expanded} timeout="auto" unmountOnExit>
//         <CardContent>
//           <Typography paragraph>Method:</Typography>
//           <Typography paragraph>
//             Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
//             aside for 10 minutes.
//           </Typography>
//           <Typography paragraph>
//             Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
//             medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
//             occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
//             large plate and set aside, leaving chicken and chorizo in the pan. Add
//             pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
//             stirring often until thickened and fragrant, about 10 minutes. Add
//             saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
//           </Typography>
//           <Typography paragraph>
//             Add rice and stir very gently to distribute. Top with artichokes and
//             peppers, and cook without stirring, until most of the liquid is absorbed,
//             15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
//             mussels, tucking them down into the rice, and cook again without
//             stirring, until mussels have opened and rice is just tender, 5 to 7
//             minutes more. (Discard any mussels that don&apos;t open.)
//           </Typography>
//           <Typography>
//             Set aside off of the heat to let rest for 10 minutes, and then serve.
//           </Typography>
//         </CardContent>
//       </Collapse>
//     </Card>
//   );
// }
