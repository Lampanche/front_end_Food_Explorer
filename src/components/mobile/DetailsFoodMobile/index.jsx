import { Container } from "./styles.js";

import iconBack from "../../../assets/CaretLeft.png";

import iconInclude from "../../../assets/includeDetailsMobile.png";

import imgFood from "../../../assets/image 2.png";

import minus from "../../../assets/Minus.png";

import plus from "../../../assets/Plus.png";


import { BtnBack } from "../../common/BtnBack/index.jsx";

import { Button } from "../../common/Button";

import { ImgFood } from "../../common/ImgFood";

import { TitleFoods } from "../../common/TitleFoods";

import { DescriptionFoods } from "../../common/DescriptionFoods";

import { Tag } from "../../common/Tag";

export function DetailsFoodMobile({isadmin})
{
  return(


    <Container>

      <BtnBack 
        imgBtnBack={iconBack} 
        fontSize={"2.4rem"} 
        weight={"400"}
        alignSelf={"flex-start"}
      />

      <ImgFood 
        widthContainer={"26.4rem"} 
        heightContainer={"26.4rem"} 
        img={imgFood}
      />

      <div className="wrappedInfosAndBtns">

        <div className="wrappedInfos">

          <TitleFoods title={"Salada Ravanello"} size={"2.704rem"} weight={"400"}/>

          <DescriptionFoods title={"Rabanetes, folhas verdes e molho agridoce salpicados com gergelim."} size={"1.622rem"} weight={"300"} align={"center"}/>

          <div className="wrappedTags">

            <Tag title={"alface"}/>
            <Tag title={"alface"}/>
            <Tag title={"alface"}/>
            <Tag title={"alface"}/>
            <Tag title={"alface"}/>
            <Tag title={"alface"}/>
            

          </div>

        </div>

        {
          isadmin ?

          <Button title={"Editar prato"}/>

          :

          <div className="wrappedBtnsInclude">

            <div className="wrappedBtnMinusAndPlus">

              <button>

                <img src={minus} alt="Imagem do botão de decrementar."></img>

              </button>

              <span>01</span>

              <button>

                <img src={plus} alt="Imagem do botão de incrementar."></img>

              </button>

            </div>

          
            <button>

              <img src={iconInclude} alt="Imagem de um cupom do botão de incluir o prato."></img>

              <span>pedir - <span>R$ 25,00</span> </span>

            </button>

          </div>

        }

      </div>

    </Container>

  )
}