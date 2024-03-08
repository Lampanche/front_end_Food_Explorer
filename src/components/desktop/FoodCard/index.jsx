import { Container } from "./styles.js";

import { BtnFavorite } from "../../common/BtnFavorite";

import { BtnFavorited } from "../../common/BtnFavorited/index.jsx";

import { BtnEditFood } from "../../common/BtnEditFood/index.jsx";

import { ImgFood } from "../../common/ImgFood";

import { TitleFoods } from "../../common/TitleFoods";

import { DescriptionFoods } from "../../common/DescriptionFoods";

import { PriceFoodCard } from "../../common/PriceFoodCard/index.jsx";

import { ControlFoodQuantity } from "../../common/ControlFoodQuantity/index.jsx";

import imgFoodCardDesk from "../../../assets/imgFoodCardDesk.png";

import plusFoodCard from "../../../assets/plusFoodCard.png";

import minusFoodCard from "../../../assets/minusFoodCard.png";

import { useState } from "react";

export function FoodCard({isadmin})
{

  const [ favorite, setFavorite] = useState(false);

  return(

    <Container>

      {

        isadmin ?

        <BtnEditFood leftPosition={"26.2rem"}/>

        :

        favorite ?

        <BtnFavorited  unfavorite={setFavorite} leftPosition={"26.2rem"}/>

        :

        <BtnFavorite favorite={setFavorite} leftPosition={"26.2rem"}/>
        
      }


      <ImgFood widthContainer={"17.6rem"} heightContainer={"17.6rem"} img={imgFoodCardDesk}/>

      <TitleFoods title={"Torradas de Parma >"} size={"2.4rem"} weight={"700"}/>

      <DescriptionFoods title={"Presunto de parma e rúcula em um pão com fermentação natural."} size={"1.4rem"} weight={"400"} align={"center"}/>

      <PriceFoodCard title={"R$ 25,97"} fontSize={"3.2rem"}/>


      {

        isadmin ?

        ""

        :

        <div className="wrappedBtns">

          <ControlFoodQuantity imgPlus={plusFoodCard} imgMinus={minusFoodCard} fontSize={"2rem"} fontWeight={"700"}/>

          <button className="btnInclude">

            Incluir

          </button>

        </div>


      }


    </Container>

  )
}