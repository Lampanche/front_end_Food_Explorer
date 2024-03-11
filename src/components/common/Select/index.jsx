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
            backgroundPosition: "top 1.95rem right 1.95rem"
          }
          }>

          <option>Refeição</option>

        </select>


    </Container>

  )
}