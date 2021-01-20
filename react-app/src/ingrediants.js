import React from 'react';

function Ingredients(props){
        return (<>
            <h2>ingredients</h2>
            {props.item.ingredients.map((ingredient)=>{
                return(<>
                 <b>{ingredient.text} </b> : {ingredient.weight}gm  ,
                </>)
            })}
        </>)
}
 
export default Ingredients;