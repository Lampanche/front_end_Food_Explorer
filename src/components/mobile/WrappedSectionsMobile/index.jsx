import { Container } from "./styles.js";

import { SectionFoods } from "../SectionFoods/index.jsx";

export function WrappedSectionsMobile({isadmin})
{
  return(

    <Container>

      <SectionFoods title={"Refeições"} isadmin={isadmin}/>
      <SectionFoods title={"Pratos principais"} isadmin={isadmin}/>
      <SectionFoods title={"Refeições"} isadmin={isadmin}/>

    </Container>

  )
}