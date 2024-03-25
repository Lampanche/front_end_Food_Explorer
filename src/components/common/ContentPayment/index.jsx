import { Container, QrCode, Form, WrappedInput, BtnPayment } from "./styles.js";

import iconPix from "../../../assets/iconPix.svg";

import iconCredit from "../../../assets/iconCredit.svg";

import qrcode from "../../../assets/qrcode.png";

import iconBtnPayment from "../../../assets/IconBtnPayment.png";

import { useState } from "react";

export function ContentPayment()
{

  const [ pixSelected, setPixSelected ] = useState(true);
  const [ creditSelected, setCreditSelected ] = useState(false);

  function handleClickCredit()
  {

    setPixSelected(false);
    setCreditSelected(true);

  }

  function handleClickPix()
  {

    setCreditSelected(false);
    setPixSelected(true);

  }

  return(

    <Container>

      <div className="wrappedTypePayment">

        {
          pixSelected ?

            <button 
              onClick={() => handleClickPix()} 
              className="btnTypePayment"
              style={{ backgroundColor: "#0D161B" }}
            >

              <img src={iconPix} alt="icone do pix"/>
              <span>PIX</span>

            </button>

          :

            <button onClick={() => handleClickPix()} className="btnTypePayment">

              <img src={iconPix} alt="icone do pix"/>
              <span>PIX</span>

            </button>

        }

        {

          creditSelected ?

            <button 
              onClick={() => handleClickCredit()} 
              className="btnTypePayment"
              style={{ backgroundColor: "#0D161B" }}
            >

              <img src={iconCredit} alt="Icone do cartão" />
              <span>Crédito</span>

            </button> 

          :

            <button onClick={() => handleClickCredit()} className="btnTypePayment">

              <img src={iconCredit} alt="Icone do cartão" />
              <span>Crédito</span>

            </button>

        }

      </div>

      <div className="content">

        {
          pixSelected ?

          <QrCode src={qrcode} alt="imagem do qrcode" />

          :

          <Form>

            <WrappedInput>
              
              <label htmlFor="numberCard">Número do cartão</label>

              <input 
                type="text"
                placeholder="0000 0000 0000 0000"
                id="numberCard"
                name="numberCard" 
              />

            </WrappedInput>

            <div className="contentWrappeds">

              <WrappedInput>
                
                <label htmlFor="validity">Validade</label>

                <input 
                  type="text"
                  placeholder="04/25"
                  id="validity"
                  name="validity" 
                />

              </WrappedInput>

              <WrappedInput>
              
                <label htmlFor="cvc">CVC</label>

                <input 
                  type="text"
                  placeholder="000"
                  id="cvc"
                  name="cvc" 
                />

              </WrappedInput>

            </div>

            <BtnPayment>

              <img src={iconBtnPayment} alt="Icone do botão de finalizar compra" />
              <span>Finalizar pagamento</span>

            </BtnPayment>

          </Form>

        }


      </div>

    </Container>

  )
}