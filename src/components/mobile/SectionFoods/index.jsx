import { Container } from "./styles.js";

import { FoodCard } from "../FoodCard/index.jsx";


export function SectionFoods({ title, isadmin })
{
  return(

    <Container>

      <h2>{title}</h2>

      <div className="wrappedFoodCards">

        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        <FoodCard isadmin={isadmin}/>
        
      </div>

    </Container>

  )
}