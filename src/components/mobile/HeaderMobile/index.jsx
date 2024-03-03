import { Container } from "./styles.js";
import logo from "../../../assets/polygon1.png";
import iconshopping from "../../../assets/iconShopping.png";
import iconMenu from "../../../assets/Menu.png";
import iconClose from "../../../assets/Close.png";
import { useState } from "react";

export function HeaderMobile({ title, isadmin, setHamMenuActivePage })
{

  const [ hamMenuActive, setHamMenuActive ] = useState(false);


  return(

    <Container>

      {
        hamMenuActive ?

        <div className="wrappedHamMenuActive">

          <button onClick={ () => {
            setHamMenuActive(false)
            setHamMenuActivePage(false)
            }
            }>

            <img src={iconClose} alt="Icone de fechar o menu." />

          </button>

          <span>Menu</span>

        </div>

        :

          <div className="wrappedHeader">

            <button onClick={ () => {
              
              setHamMenuActive(true)
              setHamMenuActivePage(true)
              }
              }>

              <img className="iconMenu" src={iconMenu} alt="icone do menu" />

            </button>

            <a href="#">

              <div>

                <img src={logo} alt="logo do restaurante" />

                <span> food explorer </span>

                <span>{isadmin ? "admin" : ""}</span>

              </div>

            </a>

            {
              isadmin ?

              ""

              :

              <div>

                <img className="iconShopping" src={iconshopping} alt="Imagem do icone de itens escolhidos" />
                
                <button>{title}0</button>

              </div>

            }

          </div>

      }

    </Container>

  )
}