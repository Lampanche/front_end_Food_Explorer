import { Container } from "./styles.js";
import iconAppFooterMobile from "../../../assets/iconAppFooterMobile.png";

export function FooterMobile()
{
  return(


    <Container>

      <div>

        <img src={iconAppFooterMobile} alt="Imagem da logo do Food Explorer"></img>
        <span>food explorer</span>

      </div>

      <span>© 2024 - Todos os direitos reservados.</span>

    </Container>

  )
}