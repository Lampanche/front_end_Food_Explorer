import { Container } from "./styles.js";
import logoRestaurante2 from "../../../assets/Polygon 2.png";

export function Footer()
{
  return(


    <Container>

      <div>

        <img src={logoRestaurante2} alt="Imagem da logo do Food Explorer"></img>
        <span>food explorer</span>

      </div>

      <span>© 2024 - Todos os direitos reservados.</span>

    </Container>

  )
}