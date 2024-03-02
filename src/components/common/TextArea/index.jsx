import { Container } from "./styles.js";


export function TextArea({title, width})
{
  return(

    <Container width={width}>

      <label htmlFor="descrição">Descrição</label>

      <textarea placeholder="Fale brevemente sobre o prato, seus ingredientes e composição.">
        {title}
      </textarea>

    </Container>

  )
}