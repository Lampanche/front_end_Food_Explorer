import { Container } from "./styles.js";

import { TitleFormAddAndAttFood } from "../../common/TitleFormAddAndAttFood/index.jsx";

import { BtnBack } from "../../common/BtnBack/index.jsx";

import { InputFile } from "../../common/InputFile/index.jsx";

import { InputText } from "../../common/InputText/index.jsx";

import { Select } from "../../common/Select/index.jsx";

import { InputIngredient } from "../../common/InputIngredient/index.jsx";

import { TextArea } from "../../common/TextArea/index.jsx";

import { BtnDeleteFood } from "../../common/BtnDeleteFood";

import { BtnSaveChangesFood } from "../../common/BtnSaveChangesFood";

import caretLeftFormDesktop from "../../../assets/CaretLeftFormDesktop.png";

import { resizeWidth } from "../../../utils/resize.js";

import { useState } from "react";

export function FormEditFoodDesktop()
{

  const vwStart = window.innerWidth

  const [ vwResized, setVwResized ] = useState(vwStart)

  resizeWidth(setVwResized)

  if(Number(vwResized) > 1300)
  {
    return(
  
      <Container>
        
        <BtnBack imgBtnBack={caretLeftFormDesktop} fontSize={"2.4rem"} weight={"700"}/>
          
        <form>
  
          <TitleFormAddAndAttFood title={"Editar prato"}/>
  
  
          <div className="wrappedInputs">
  
            <InputFile 
              title={"Selecione a imagem"} 
              widthContainer={"23rem"}
              idInput={"imgFood"}
              nameInput={"imgFood"}
            />
            
            <InputText
              widthContainer={"46.3rem"} 
              idInput={"name"}
              nameInput={"name"}
              typeInput={"text"}
              title={"Nome"}
              placeholder={"Ex.: Salada Ceasar"}
              gapContainerInput={"1.6rem"}        
            />
  
            <Select width={"36.4rem"}/>
  
          </div>
  
          <div className="wrappedInputs">
  
            <InputIngredient width={"83.7rem"}/>
  
            <InputText
              widthContainer={"25.1rem"} 
              idInput={"price"}
              nameInput={"price"}
              typeInput={"text"}
              title={"Preço"}
              placeholder={"R$ 00,00"}
              gapContainerInput={"1.6rem"}        
            />
  
          </div>
  
          <TextArea 
            title={"Fale brevemente sobre o prato, seus ingredientes e composição"}
            width={""}
          />
  
          <div className="wrappedBtns">

            <BtnDeleteFood />

            <BtnSaveChangesFood />

          </div>
  
  
        </form>
  
      </Container>
  
    )

  }

  else if(Number(vwResized) <= 1300)
  {
    return(
  
      <Container>
        
        <BtnBack imgBtnBack={caretLeftFormDesktop} fontSize={"2.4rem"} weight={"700"}/>
          
        <form>
  
          <TitleFormAddAndAttFood title={"Editar prato"}/>
  
  
          <div className="wrappedInputs">
  
            <InputFile title={"Selecione a imagem"} widthContainer={"23rem"}/>
            
            <InputText
              widthContainer={"26.8rem"} 
              idInput={"name"}
              nameInput={"name"}
              typeInput={"text"}
              title={"Nome"}
              placeholder={"Ex.: Salada Ceasar"}
              gapContainerInput={"1.6rem"}        
            />
  
            <Select width={"23.8rem"}/>
  
          </div>
  
          <div className="wrappedInputs">
  
            <InputIngredient width={"58.4rem"}/>
  
            <InputText
              widthContainer={"18.4rem"} 
              idInput={"price"}
              nameInput={"price"}
              typeInput={"text"}
              title={"Preço"}
              placeholder={"R$ 00,00"}
              gapContainerInput={"1.6rem"}        
            />
  
          </div>
  
          <TextArea 
            title={"Fale brevemente sobre o prato, seus ingredientes e composição"}
            width={""}
          />
  
          <div className="wrappedBtns">

            <BtnDeleteFood />

            <BtnSaveChangesFood/>

          </div>
  
  
        </form>
  
      </Container>
  
    )

  }
  
}