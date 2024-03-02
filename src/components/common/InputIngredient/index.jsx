import { Container } from "./styles.js";

import { TagIngredientAdded } from "../TagIngredientAdded/index.jsx";

import { AddIngredient } from "../AddIngredient/index.jsx";

import { useState } from "react";


export function InputIngredient({ width })
{

  const [ listValueIngredientAdded, setListValueIngredientAdded ] = useState([]);

  return(

    <Container width = {width}>

      <label htmlFor="ingredientes">Ingredientes</label>

      <div className="wrappedTagAndInput">

        { 
          
          listValueIngredientAdded.map((el, index) => ( <TagIngredientAdded title={el} key={index} indexEl={index} setIngredient = {setListValueIngredientAdded}/> ))

        }

        <AddIngredient setIngredient = {setListValueIngredientAdded}/>

      </div>

    </Container>

  )
}