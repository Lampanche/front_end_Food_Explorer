import { Container } from "./styles.js";

import { BtnFavorite } from "../../common/BtnFavorite/index.jsx";

import { BtnFavorited } from "../../common/BtnFavorited";

import { BtnEditFood } from "../../common/BtnEditFood";

import { ImgFood } from "../../common/ImgFood/index.jsx";

import { TitleFoods } from "../../common/TitleFoods";

import { PriceFoodCard } from "../../common/PriceFoodCard/index.jsx";

import { ControlFoodQuantity } from "../../common/ControlFoodQuantity/index.jsx";

import imgFood from "../../../assets/Dish.png";

import plusFoodCard from "../../../assets/plusFoodCard.png";

import minusFoodCard from "../../../assets/minusFoodCard.png";

import { useState } from "react";


export function FoodCard({ isadmin })
{

  const [ favorite, setFavorite] = useState(false);


  return(

    <Container isadmin={isadmin}>

        {
          isadmin ?

          <BtnEditFood leftPosition={"17rem"}/>
          
          :
          
          favorite ?

          <BtnFavorited unfavorite={setFavorite} leftPosition={"17rem"}/>

          :

          <BtnFavorite favorite={setFavorite} leftPosition={"17rem"}/>

        }

        <div className="wrappedMainContent">
        
          <ImgFood widthContainer={"8.8rem"} heightContainer={"8.8rem"} img={imgFood}/>

          <TitleFoods title={"Suco de maracujá >"} size={"1.4rem"} weight={"400"}/>

          <PriceFoodCard fontSize={"1.6rem"} title={"R$ 50,67"}/>

          {
              isadmin?

              ""

              :

              <div className="wrappedBtnsUser">

                <ControlFoodQuantity imgPlus={plusFoodCard} imgMinus={minusFoodCard} fontSize={"1.6rem"} fontWeight={"400"}/>

                <button className="btnAddFood">
                  incluir
                </button>

              </div>

          }


        </div>


    </Container>

  )
}