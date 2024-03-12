import { Container } from "./styles.js";


export function ButtonText({ view, title})
{ 

  if(view === "signIn")
  {
    return(
  
      <Container to={"/signup"}>
  
        {title}
  
      </Container>
  
    )
  }

  else if(view === "signUp")
  {
    return(
  
      <Container to={"/"}>
  
        {title}
  
      </Container>
  
    )
  }

}