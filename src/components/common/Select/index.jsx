import { Container } from "./styles.js";


export function Select({ width })
{
  return(

    <Container width = {width}>

      <label htmlFor="category">Categoria</label>


        <select 
        name="category" 
        id="category" 
        style={ 
          { backgroundImage: "url(arrowDownSelect.png)",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top 1.6rem right 1.2rem"
          }
          }>

          <option>Refeição</option>

        </select>


    </Container>

  )
}