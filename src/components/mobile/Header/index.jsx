import { Container } from "./styles.js"
import logo from "../../../assets/polygon1.png"
import iconshopping from "../../../assets/iconShopping.png"
import iconMenu from "../../../assets/Menu.png"

export function Header_mobile({ title, isAdmin })
{
  return(

    <Container>

      <div>

        <button>

          <img className="iconMenu" src={iconMenu} alt="icone do menu" />

        </button>

        <a href="#">

          <div>

            <img src={logo} alt="logo do restaurante" />

            <span> food explorer </span>

            <span>{isAdmin ? "admin" : ""}</span>

          </div>

        </a>

        <div>

          <img className="iconShopping" src={iconshopping} alt="Imagem do icone de itens escolhidos" />
          
          <button>{title}0</button>

        </div>

      </div>

    </Container>

  )
}