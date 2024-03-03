import { Container } from "./styles.js";

import iconSearch from "../../../assets/search.png";

export function HamMenu({ isadmin })
{
  return(

    <Container>

      <div className="wrappedInput">

        <img src={iconSearch} alt="Icone do input de pesquisa."/>

        <input placeholder="Busque por pratos ou ingredientes"></input>

      </div>

      {

      isadmin ?

        <div className="wrappedHamMenuOptions">

          <div className="wrappedBtnOptions">

            <button>
              <span>Novo prato</span>
            </button>

          </div>

          <div className="wrappedBtnOptions">

            <button>
              <span>Sair</span>
            </button>

          </div>

        </div>

        :

        <div className="wrappedHamMenuOptions">

          <div className="wrappedBtnOptionsUser">

            <button>
              <span>Sair</span>
            </button>

          </div>

        </div>

      }

    </Container>

  )
}