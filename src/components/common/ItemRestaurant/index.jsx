import { Container } from "./styles.js";

import { WrappedInfoRestaurant } from "./styles.js";

import { Button } from "../../common/Button";

import { Link } from "react-router-dom";

import iconRestaurant from "../../../assets/IconRestaurant.png";

export function ItemRestaurant({isadmin, title})
{
  return(

    <Container>

      <WrappedInfoRestaurant>

        <img src={iconRestaurant} alt="Imagem do restaurante" ></img>

        <Link>{title}</Link>

      </WrappedInfoRestaurant>

      {

        isadmin ?

        <button>
          Editar
        </button>

        :

        ""

      }

    </Container>

  )
}