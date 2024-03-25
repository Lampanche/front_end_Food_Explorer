import { Container } from "./styles.js";

import { ImgFood } from "../ImgFood";

import { TitleFoods } from "../TitleFoods";

import imgCardOrder from "../../../assets/imgCardOrder.png";

export function ItemOrder()
{
  return(

    <Container>

      <ImgFood 
        heightContainer={"7.2rem"} 
        widthContainer={"7.2rem"} 
        img={imgCardOrder} 
      />

      <div className="wrapped">

        <div className="infos">

          <span>

            1

            <span>X</span>

          </span>

          <TitleFoods size={"2rem"} title={"Salada Radish"} />

          <span>R$ 20,97</span>

        </div>

        <button>
          Excluir
        </button>

      </div>

    </Container>

  )
}