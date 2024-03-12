import { Container } from "./styles.js";

import { SectionFoods } from "../SectionFoods";

export function WrappedSectionsDesktop({isadmin})
{
  return(

    <Container>

      <SectionFoods isadmin={isadmin} title={"Refeições"}/>
      <SectionFoods isadmin={isadmin} title={"Sobremesas"}/>
      <SectionFoods isadmin={isadmin} title={"Bebidas"}/>

    </Container>

  )
}