import { Container } from "./styles.js";

import { HeaderMobile } from "../../components/mobile/Header/index.jsx";

import { HeaderDesktop } from "../../components/desktop/Header/index.jsx";

import { SectionFoods } from "../../components/mobile/SectionFoods";

import { Footer } from "../../components/mobile/Footer/index.jsx";

import { toogleComponents } from "../../utils/toogleComponents.js";

import { resizeWidth } from "../../utils/resize.js";

import { useState, useEffect } from "react";

import mainImgHome from "../../assets/pngegg 2.png";

import iconSearch from "../../assets/search.png";

export function Home()
{ 

  const [ isAdmin, setIsAdmin ] = useState(true);

  const [ activeHamMenu, setActiveHamMenu ] = useState(false);

  const [vwStart, setVwStart] = useState("");

  resizeWidth(setVwStart);

  const Header = toogleComponents(vwStart, HeaderMobile, HeaderDesktop);

  useEffect(() => {}, [activeHamMenu]);

  return( 

    <Container>

      <Header isadmin = {false} setHamMenuActiveHome = {setActiveHamMenu}/>
        
      {
        activeHamMenu ?

        <main style=
        {
          { alignItems:"center",
            minHeight: "67.7rem"
          }
        }>

          <div className="wrappedContentHamMenu">

            <div className="wrappedInput">

              <img src={iconSearch} alt="Icone do input de pesquisa."/>

              <input placeholder="Busque por pratos ou ingredientes"></input>

            </div>

            {
              isAdmin ?

              <div className="wrappedHamMenuOptions">

                <div className="wrappedBtnOptions">

                  <button>
                    <span>Novo prato</span>
                  </button>

                </div>

                <div className="wrappedBtnOptions">

                  <button>
                    <span>Sair</span>
                  </button>

                </div>

              </div>

              :

              <div className="wrappedHamMenuOptions">

                <button>
                  <span>Sair</span>
                </button>

              </div>

            }

          </div>

        </main>

        :

        <main>

          <div className="wrappedMainText">

            <img src={mainImgHome} alt="Imagem de alimentos."></img>

            <div className="wrappedText">

              <h1>Sabores inigualáveis</h1>
              <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>

            </div>

          </div>

          <div className="wrappedSections">

            <SectionFoods title={"Refeições"} isadmin={false}/>
            <SectionFoods title={"Pratos principais"} isadmin={false}/>
            <SectionFoods title={"Refeições"} isadmin={false}/>

          </div>

        </main>

      }

      <Footer/>

    </Container>

  )
}
