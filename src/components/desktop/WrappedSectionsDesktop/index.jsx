import { Container } from "./styles.js";

import { SectionFoods } from "../SectionFoods";

export function WrappedSectionsDesktop({isadmin})
{
  return(

    <Container>

      <SectionFoods isadmin={false} title={"Refeições"}/>
      <SectionFoods isadmin={false} title={"Sobremesas"}/>
      <SectionFoods isadmin={false} title={"Bebidas"}/>

    </Container>

  )
}