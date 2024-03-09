import { Container } from "./styles.js";

import { BtnBack } from "../../common/BtnBack";

import { ImgFood } from "../../common/ImgFood";

import { TitleFoods } from "../../common/TitleFoods";

import { DescriptionFoods } from "../../common/DescriptionFoods";

import { Tag } from "../../common/Tag";

import { ControlFoodQuantity } from "../../common/ControlFoodQuantity";

import { Button } from "../../common/Button";

import minus from "../../../assets/minusFoodCardDetails.png";

import plus from "../../../assets/plusFoodCardDetails.png";

import caretLeft from "../../../assets/CaretLeft.png";

import imageFoodDetailsDesk from "../../../assets/imageFoodDetailsDesk.png"

export function DetailsFoodDesktop({isadmin})
{
  return(

    <Container>

      <BtnBack imgBtnBack={caretLeft} fontSize={"2.4rem"} weight={"700"}/>

      <div className="wrappedContentDetailsFood">

        <ImgFood img={imageFoodDetailsDesk} heightContainer={"39rem"} widthContainer={"39rem"} />

        <div className="wrappedTextAndBtns">

          <div className="wrappedContentText">

            <TitleFoods title={"Salada Ravanelo"} size={"4rem"} weight={"500"}/>

            <DescriptionFoods title={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim. O pão naan dá um toque especial."} size={"2.4rem"} weight={"400"} />

            <div className="wrappedTags">

              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>
              <Tag title={"Alface"}/>

            </div>

          </div>

          {

            isadmin ?

            <Button title={"Editar prato"}/>

            :

            <div className="wrappedBtns">

              <ControlFoodQuantity imgMinus={minus} imgPlus={plus} fontSize={"2rem"} fontWeight={"700"} />
              <Button title={"incluir ∙ R$ 25,00"}/> 

            </div>

          }

        </div>

      </div>

     

    </Container>

  )
}