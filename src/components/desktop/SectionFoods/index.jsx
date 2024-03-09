import { Container } from "./styles.js";

import { FoodCard } from "../FoodCard";

import caretLeftCarrossel from "../../../assets/caretLeftCarrossel.png";

import caretRightCarrossel from "../../../assets/caretRightCarrossel.png";

import { useRef } from "react";

export function SectionFoods({isadmin ,title})
{

  const carrossel = useRef(null)

  function handleClickLeft(e)
  {
    e.preventDefault()

    carrossel.current.scrollLeft-= 200
    

  }

  function handleClickRight(e)
  {
    e.preventDefault()

    carrossel.current.scrollLeft += 200

  }


  return(

    <Container>

      <h2>{title}</h2>

      <div className="wrappedBtnCarrosselLeft">

        <button onClick={(e) => handleClickLeft(e)}>
          <img src={caretLeftCarrossel} alt="Icone do botão da esquerda do carrossel" />
        </button>

      </div>

      <div className="wrappedBtnCarrosselRight">

        <button onClick={(e) => handleClickRight(e)}>
          <img src={caretRightCarrossel} alt="Icone do botão da direita do carrossel" />
        </button>

      </div>

      <div className="wrappedFoodCards" ref={carrossel}>

        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>

      </div>


    </Container>

  )
}