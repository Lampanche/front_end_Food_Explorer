import { Container } from "./styles.js";


export function InputText({title, nameInput, idInput, placeholder, gapContainerInput, typeInput, widthContainer, setName, setEmail, setPassword, emailValue, nameValue, passwordValue})
{ 

  if(typeInput == "text")
  {
    return(
  
      <Container gap={gapContainerInput} width={widthContainer}>
  
        <label htmlFor={nameInput}>{title}</label>
        <input value={nameValue} onChange={(e) => setName(e.currentTarget.value)} type={typeInput} name={nameInput} id={idInput} placeholder={placeholder}></input>
  
      </Container>
  
  
    )

  }

  if(typeInput == "password")
  {
    return(
  
      <Container gap={gapContainerInput} width={widthContainer}>
  
        <label htmlFor={nameInput}>{title}</label>
        <input value={passwordValue} onChange={(e) => setPassword(e.currentTarget.value)} required minLength={6} type={typeInput} name={nameInput} id={idInput} placeholder={placeholder}></input>
  
      </Container>
  
  
    )

  }

  if(typeInput == "email")
  {
    return(
  
      <Container gap={gapContainerInput} width={widthContainer}>
  
        <label htmlFor={nameInput}>{title}</label>
        <input value={emailValue} onChange={(e) => setEmail(e.currentTarget.value)} type={typeInput} name={nameInput} id={idInput} placeholder={placeholder}></input>
  
      </Container>
  
  
    )

  }

}