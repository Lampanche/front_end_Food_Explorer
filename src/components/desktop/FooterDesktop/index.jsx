import { Container } from "./styles.js";

import iconAppFooterDesktop from "../../../assets/iconAppFooterDesktop.png";


export function FooterDesktop()
{
  return(

    <Container>

      <div>

        <div className="wrappedLogoApp">

          <img src={iconAppFooterDesktop} alt="Imagem da logo do Food Explorer"></img>
          <span>food explorer</span>

        </div>

        <span>© 2024 - Todos os direitos reservados.</span>

      </div>

    </Container>

  )
}