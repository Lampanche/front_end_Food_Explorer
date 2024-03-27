import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop";

import { MyOrder } from "../../components/common/MyOrder";

import { Payment } from "../../components/common/Payment";

import { FooterMobile } from "../../components/mobile/FooterMobile";

import { FooterDesktop } from "../../components/desktop/FooterDesktop";

import { resizeWidth } from "../../utils/resize.js";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { useState } from "react";

import { useAuth } from "../../hooks/auth.jsx";

export function Order()
{

  const { user }  = useAuth();

  const vwStart = window.innerWidth;

  const [ vwResized, setVwResized ] = useState(vwStart);

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  const [ payment, setPayment ] = useState(false);

  resizeWidth(setVwResized);

  const Header = toogleComponents(vwResized, HeaderMobile, HeaderDesktop);
  const Footer = toogleComponents(vwResized, FooterMobile, FooterDesktop);

  return(

    <Container>

      <Header isadmin={user.admin} setHamMenuActivePage={setActiveHamMenu}/>

        {
          activeHamMenu ?
            
            <main>

              <HamMenu isadmin={user.admin} />

            </main>

          :

          <main>

            {
              (Number(vwResized)<=900) ?

                <div className="wrappedTabletAndMobile">

                  {

                    payment ?

                      <div className="contentTabletAndMobile">

                        <Payment/>

                        <button onClick={() => setPayment(false)}>

                          Voltar

                        </button>

                      </div>

                    :

                      <div className="contentTabletAndMobile">

                        <MyOrder/>

                        <button onClick={() => setPayment(true)}>

                          Avançar

                        </button>

                      </div>

                  }

                </div>

                :

                <div className="contentOrder">

                  <MyOrder/>
                  <Payment/>

                </div>

            }

          </main>

        }


      <Footer/>

    </Container>

  )

}