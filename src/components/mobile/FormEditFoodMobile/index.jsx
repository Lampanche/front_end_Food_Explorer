import { Container } from "./styles.js";

import { BtnBack } from "../../common/BtnBack";

import { TitleFormAddAndAttFood } from "../../common/TitleFormAddAndAttFood";

import { InputText } from "../../common/InputText";

import { InputFile } from "../../common/InputFile/index.jsx";

import { Select } from "../../common/Select";

import { InputIngredient } from "../../common/InputIngredient/index.jsx";

import { TextArea } from "../../common/TextArea/index.jsx";

import { BtnSaveChangesFood } from "../../common/BtnSaveChangesFood";

import caretLeftFormNewFood from "../../../assets/CaretLeftFormMobile.png";

import { BtnDeleteFood } from "../../common/BtnDeleteFood";

export function FormEditFoodMobile()
{

  return(

    <Container>

      <BtnBack
        imgBtnBack={caretLeftFormNewFood}
        alignSelf={"flex-start"}
        weight={"400"}
        fontSize={"1.655rem"}
      />

      <TitleFormAddAndAttFood title={"Editar prato"}/>

      <InputFile />

      <InputText
        title={"Nome"} 
        idInput={"nameFood"}
        nameInput={"nameFood"}
        typeInput={"text"}
        placeholder={"Ex.: Salada Ceasar"}
        gapContainerInput={"1.6rem"}
      />

      <Select/>

      <InputIngredient />

      <InputText
        title={"Preço"} 
        idInput={"price"}
        nameInput={"price"}
        typeInput={"text"}
        placeholder={"R$ 00,00"}
        gapContainerInput={"1.6rem"}
      />

      <TextArea />

      <div className="wrappedBtns">

        <BtnDeleteFood />
        <BtnSaveChangesFood  width={"17.2rem"} />

      </div>

    </Container>

  )
}