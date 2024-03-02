import { Container } from "./styles.js";

import iconDelete from "../../../assets/X.png";

export function TagIngredientAdded({ title, setIngredient, indexEl })
{
  return(

    <Container>

      <span>{title}</span>

      <button onClick={() => setIngredient(prevstate => prevstate.filter( (el, index) => index != indexEl ))}>

        <img src={iconDelete} alt="Icone de deletar a tag do ingrediente"></img>

      </button>

    </Container>

  )
}