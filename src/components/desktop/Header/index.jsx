import { Container } from "./styles.js";
import logo from "../../../assets/polygon1.png";
import iconshopping from "../../../assets/iconShopping.png";
import iconSignOut from "../../../assets/SignOut.png";

import { SearchInput } from "../SearchInput/index.jsx";


export function HeaderDesktop({ isadmin })
{ 

  return(

    <Container>
      
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

        <SearchInput isAdmin={ isadmin }/>

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