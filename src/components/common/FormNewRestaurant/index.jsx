import { Container } from "./styles.js";

import { TiPlus } from "react-icons/ti";

import { BtnBack } from "../BtnBack";

import { InputText } from "../InputText";

import { InputFile } from "../InputFile";

import caretLeftFormDesktopRestaurant from "../../../assets/CaretLeftFormDesktop.png";

export function FormNewRestaurant()
{
  return(

    <Container>

        <BtnBack imgBtnBack={caretLeftFormDesktopRestaurant} weight={"700"} fontSize={"2.4rem"} />

        <div className="wrappedTitle">

          <TiPlus/>
          <h1>Novo restaurante</h1>

        </div>

      <form>

        <div className="wrappedInputs">

          <InputFile 
            title={"Logo"} 
            widthContainer={"50%"}
            nameInput={"logo"}
            idInput={"logo"}
          />

          <InputText 
            title={"Nome"}
            placeholder={"Nome do restaurante"}
            gapContainerInput={"1.6rem"}
            nameInput={"name"}
            idInput={"name"}
            typeInput={"text"}
            widthContainer={"50%"} 
          />

        </div>


        <div className="wrappedInputs">

          <InputText 
              title={"Conta"}
              placeholder={"0000000-0"}
              gapContainerInput={"1.6rem"}
              nameInput={"count"}
              idInput={"count"}
              typeInput={"text"}
              widthContainer={"50%"} 
            />

          <InputText 
            title={"Agência sem DV"}
            placeholder={"0000"}
            gapContainerInput={"1.6rem"}
            nameInput={"agency"}
            idInput={"agency"}
            typeInput={"text"}
            widthContainer={"50%"}  
          />

        </div>

        <button>

          Salvar

        </button>

      </form>


    </Container>

  )
}