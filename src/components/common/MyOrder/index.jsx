import { Container } from "./styles.js";

import { ItemOrder } from "../ItemOrder";

export function MyOrder()
{
  return(

    <Container>

      <h2>Meu pedido</h2>

      <div className="content">

        <div className="wrappedItensOrder">

          <ItemOrder/>
          <ItemOrder/>
          <ItemOrder/>
          <ItemOrder/>
          <ItemOrder/>
          <ItemOrder/>
          <ItemOrder/>
          <ItemOrder/>

        </div>

        <div className="sumPriceOrder">

          <span>Total:</span>
          <span>R$150,00</span>

        </div>

      </div>

    </Container>

  )
}