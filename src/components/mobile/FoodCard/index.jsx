import { Container } from "./styles.js";

import favoriteBtn from "../../../assets/favorite.png";
import imgFood from "../../../assets/Dish.png";
import imgBtnEditAdmin from "../../../assets/Pencil.png";
import plus from "../../../assets/Plus.png";
import minus from "../../../assets/Minus.png";


export function FoodCard({ isadmin })
{
  return(

    <Container isadmin={isadmin}>

        {
          isadmin?

          <button className="btnHigher">

            <img src={imgBtnEditAdmin} alt="Imagem de um coração, referente ao botão para favoritar."/>

          </button>

          :

          <button className="btnHigher">

            <img src={favoriteBtn} alt="Imagem de um lápis, referente ao botão para editar."/>

          </button>

        }

      <div className="wrappedMainContent">
        

        <div className="wrappedImgFood">

          <img src={imgFood} alt="Imagem da refeição."></img>

        </div>

        <button className="btnDetailsFood">

          <span>Salada Legal</span>

        </button>

        <span>R$ 40,00</span>

        {
            isadmin?

            ""

            :

            <div className="wrappedBtnsUser">

              <div className="wrappedMinusAndPlus">

              <button>

                <img src={minus} alt="Botão de diminuir a quantidade selecionada."></img>

              </button>

              <span>01</span>

              <button>

                <img src={plus} alt="Botão de aumentar a quantidade selecionada."></img>

              </button>

              </div>

              <button className="btnAddFood">
                incluir
              </button>

            </div>

        }


      </div>


    </Container>

  )
}