import { Container } from "./styles.js";

import { BtnFavorite } from "../../common/BtnFavorite/index.jsx";

import { ImgFood } from "../../common/ImgFood/index.jsx";

import { PriceFoodCard } from "../../common/PriceFoodCard/index.jsx";

import { ControlFoodQuantity } from "../../common/ControlFoodQuantity/index.jsx";

import favoriteBtn from "../../../assets/favorite.png";

import imgFood from "../../../assets/Dish.png";

import imgBtnEditAdmin from "../../../assets/Pencil.png";

import plusFoodCard from "../../../assets/plusFoodCard.png";

import minusFoodCard from "../../../assets/minusFoodCard.png";


export function FoodCard({ isadmin })
{
  return(

    <Container isadmin={isadmin}>

        {
          isadmin?

          <BtnFavorite leftPosition={"17rem"}/>

          :

          <button className="btnHigher">

            <img src={favoriteBtn} alt="Imagem de um lápis, referente ao botão para editar."/>

          </button>

        }

      <div className="wrappedMainContent">
        
        <ImgFood widthContainer={"8.8rem"} heightContainer={"8.8rem"}/>

        <button className="btnDetailsFood">

          <span>Salada Legal</span>

        </button>

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