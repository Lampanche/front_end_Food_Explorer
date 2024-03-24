import { Container } from "./styles.js";

import { WrappedInfoRestaurant } from "./styles.js";

import { Link, useNavigate } from "react-router-dom";

import iconRestaurant from "../../../assets/IconRestaurant.png";

export function ItemRestaurant({isadmin, title})
{

  const navigate = useNavigate();

  return(

    <Container>

      <WrappedInfoRestaurant>

        <img src={iconRestaurant} alt="Imagem do restaurante" ></img>

        <Link>{title}</Link>

      </WrappedInfoRestaurant>

      {

        isadmin ?

        <button onClick={() => navigate("/editRestaurant") }>
          Editar
        </button>

        :

        ""

      }

    </Container>

  )
}