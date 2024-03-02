import { Container } from "./styles.js";

import plusAddIngredient from "../../../assets/PlusAddIngredient.png";

import { useState } from "react";

export function AddIngredient({ setIngredient})
{

  const [ valueInput, setValueInput ] = useState("");

  return(

    <Container>

      <input type="text" placeholder="Adicionar" name="ingredientes" id="ingredientes" onChange={(e) => setValueInput(e.currentTarget.value)}></input>

      <button onClick={() =>  setIngredient(prevstate => [...prevstate, valueInput]) }>

        <img src={plusAddIngredient} alt="Icone de adicionar um ingrediente"></img>

      </button>

    </Container>

  )
}