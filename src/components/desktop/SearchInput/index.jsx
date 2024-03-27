import { Container } from "./styles.js";

import iconSearch from "../../../assets/search.png";

import { useRef, useEffect, useState } from "react";

export function SearchInput({ isAdmin })
{

  const containerInput = useRef(null);
  const input = useRef(null);
  
  function setBorderContainerWhenInputFocus()
  {
    containerInput.current.style.border = "2px solid #FFFFFF"
  }

  function unSetBorderContainerWhenInputNotFocus()
  {
    containerInput.current.style.border = "none"
  }

  if(isAdmin)
  {

    return(
  
      <Container ref={containerInput} isadmin = {isAdmin}>
  
        <div>

          <img src={iconSearch} alt="icone de uma lupa para a barra de pesquisa" />
  
          <input onBlur={() => unSetBorderContainerWhenInputNotFocus()} onFocus={() => setBorderContainerWhenInputFocus()} type="text" placeholder="Busque por pratos ou ingredientes" /> 

        </div>       
  
      </Container>
  
    )

  }

  if(!isAdmin)
  {

    return(
  
      <Container ref={containerInput} isadmin = {isAdmin}>

        <img src={iconSearch} alt="icone de uma lupa para a barra de pesquisa" />
  
        <input onBlur={() => unSetBorderContainerWhenInputNotFocus()} onFocus={() => setBorderContainerWhenInputFocus()} type="text" placeholder="Busque por pratos ou ingredientes" />        
  
      </Container>
  
    )

  }

}