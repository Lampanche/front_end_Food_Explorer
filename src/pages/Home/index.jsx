import { Container } from "./styles.js"

import { Header_mobile } from "../../components/mobile/Header/index.jsx"

import { Header_desktop } from "../../components/desktop/Header/index.jsx"

import { toogleComponents } from "../../utils/toogleComponents.js"

import { resize } from "../../utils/resize.js"

import { useState, useEffect } from "react"

export function Home()
{
  const [vwStart, setVwStart] = useState("")

  resize(setVwStart)

  const Layout = toogleComponents(vwStart, Header_mobile, Header_desktop)

  return( 

    <Container>

      <Layout/>

    </Container>

  )
}
