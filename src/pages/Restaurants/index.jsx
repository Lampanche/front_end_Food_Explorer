import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/HeaderMobile";

import { HamMenu } from "../../components/mobile/HamMenu/index.jsx";

import { HeaderDesktop } from "../../components/desktop/HeaderDesktop";

import { ItemRestaurant } from "../../components/common/ItemRestaurant/index.jsx";

import { FooterMobile } from "../../components/mobile/FooterMobile";

import { FooterDesktop } from "../../components/desktop/FooterDesktop";

import { resizeWidth } from "../../utils/resize.js";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { useAuth } from "../../hooks/auth.jsx";

import { useState } from "react";

import { useNavigate } from "react-router-dom";

import { TiPlus } from "react-icons/ti";

export function Restaurants()
{

  const navigate = useNavigate();

  const { user }  = useAuth();

  const vwStart = window.innerWidth;

  const [ vwResized, setVwResized ] = useState(vwStart);

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  resizeWidth(setVwResized);

  const Header = toogleComponents(vwResized, HeaderMobile, HeaderDesktop);
  const Footer = toogleComponents(vwResized, FooterMobile, FooterDesktop);

  return(

    <Container>

      <Header isadmin={user.admin} setHamMenuActivePage={setActiveHamMenu} />

      {
        activeHamMenu ?

        <main>

          <HamMenu isadmin={user.admin}/>

        </main>

        :

        <main>

          <div className="content">

            <h1>Restaurantes</h1>

            <div className="contentRestaurants">

              {

                user.admin ?

                  <button onClick={() => navigate("/newRestaurant")} className="wrappedBtnAdd">

                    <TiPlus/>

                    <span>Adicionar</span>

                  </button>

                  :

                  ""

              }


              <div className="listRestaurants">


                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />
                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />
                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />
                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />
                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />
                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />
                <ItemRestaurant title={"Food explorer"} isadmin={user.admin} />

              </div>

            </div>

          </div>

        </main>


      }

      <Footer/>

    </Container>

  )
}