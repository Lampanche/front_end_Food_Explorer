import { Container } from "./styles.js";

import { InputFile } from "../../components/common/InputFile/index.jsx";

import { Select } from "../../components/common/Select";

import { InputIngredient } from "../../components/common/InputIngredient/index.jsx";

import { TextArea } from "../../components/common/TextArea/index.jsx";

import { BtnSaveNewFood } from "../../components/common/BtnSaveNewFood/index.jsx";

export function New()
{
  return(

    <Container>

      <BtnSaveNewFood width={"150px"} padH={"3.2rem"} padV={"1.2rem"}/>

    </Container>

  )
}