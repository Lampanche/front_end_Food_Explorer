import { Container } from "./styles.js";

import { useState} from "react";

export function InputFile({widthContainer, alignItems, title})
{

  const [ valueInputFile, setValueInputFile ] = useState(title)

  return(

    <Container>

      <label htmlFor="imgfood">Imagem do prato</label>
      
      <div className="wrappedInputContent" width = {widthContainer} align = {alignItems}>

        <button className="wrappedInput" style={{ backgroundImage: "url(UploadSimple.png)" }}>

          <input  type="file" name="imgfood" id="imgfood" onChange={(e) => setValueInputFile(e.currentTarget.files.item(0).name)}></input>

        </button>

        <span>{valueInputFile}</span>

      </div>

    </Container>

  )
}