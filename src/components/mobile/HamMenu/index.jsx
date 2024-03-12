import { Container } from "./styles.js";

import iconSearch from "../../../assets/search.png";

import { Link } from "react-router-dom";

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

            <Link to={"/new"}>
              Novo prato
            </Link>

          </div>

          <div className="wrappedBtnOptions">

            <Link>
              Sair
            </Link>

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