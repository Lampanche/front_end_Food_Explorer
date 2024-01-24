import { Container } from "./styles.js"
import logo from "../../../assets/polygon1.png"
import iconshopping from "../../../assets/iconShopping.png"
import iconSignOut from "../../../assets/SignOut.png"
import iconSearch from "../../../assets/search.png"

export function Header_desktop({ isadmin })
{ 

  console.log(isadmin)

  return(

    <Container isadmin = {isadmin}>
      
      <div>

        <a href="">

          <div className="wrappedLogo">

            <div>

              <img src={logo} alt="logo do restaurante" />

              <span>food explorer</span>

            </div>

            <span>{isadmin ? "admin" : ""}</span>

          </div>

        </a>

        <div className="wrappedInput">

          <img src={iconSearch} alt="icone de uma lupa para a barra de pesquisa" />

          <input type="text" placeholder="Busque por pratos ou ingredientes" />

        </div>

        {isadmin ? 
        
          <button className="btnAdmin">

            <span>Novo prato</span>

          </button>
        
          :

          <div className="wrappedBtnAndLink">

            <a href="#">Meus favoritos</a>

            <button className="btnUser">

              <img src={iconshopping} alt="Imagem do icone de itens escolhidos" />

                <span>
                  Pedidos (<span>0</span>)
                </span>

            </button>

          </div>
        
        }

        <button>

          <img src={iconSignOut} alt="icone do botão de deslogar do sistema" />

        </button>

      </div>

    </Container>
  )
}