import { Container } from "./styles.js";

import { useState} from "react";

export function InputFile({widthContainer, alignItems, title, nameInput, idInput})
{

  const [ valueInputFile, setValueInputFile ] = useState("")

  return(

    <Container width = {widthContainer}>

      <label htmlFor={nameInput}>{title}</label>
      
      <div className="wrappedInputContent" align = {alignItems}>

        <button className="wrappedInput" style={{ backgroundImage: "url(UploadSimple.png)" }}>

          <input  type="file" name={nameInput} id={idInput} onChange={(e) => setValueInputFile(e.currentTarget.files.item(0).name)}></input>

        </button>

        <span>{title}</span>

      </div>

    </Container>

  )
}