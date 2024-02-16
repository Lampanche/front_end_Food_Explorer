import { Container } from "./styles.js";

import iconSearch from "../../../assets/search.png";

export function SearchInput({ isAdmin })
{

  console.log(isAdmin)

  if(isAdmin)
  {

    return(
  
      <Container isadmin = {isAdmin}>
  
        <div>

          <img src={iconSearch} alt="icone de uma lupa para a barra de pesquisa" />
  
          <input type="text" placeholder="Busque por pratos ou ingredientes" /> 

        </div>       
  
      </Container>
  
    )

  }

  if(!isAdmin)
  {

    console.log("if", isAdmin)

    return(
  
      <Container isadmin = {isAdmin}>

        <img src={iconSearch} alt="icone de uma lupa para a barra de pesquisa" />
  
        <input type="text" placeholder="Busque por pratos ou ingredientes" />        
  
      </Container>
  
    )

  }

}