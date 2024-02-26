import { Container } from "./styles.js";


export function InputText({title, nameInput, idInput, placeholder, gapContainerInput, typeInput})
{
  return(

    <Container gap={gapContainerInput}>

      <label htmlFor={nameInput}>{title}</label>
      <input type={typeInput} name={nameInput} id={idInput} placeholder={placeholder}></input>

    </Container>

  )
}