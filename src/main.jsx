import React from 'react'
import ReactDOM from 'react-dom/client'
import { Edit } from "./pages/Edit"

import { ThemeProvider } from "styled-components"
import theme from './styles/theme.js'
import GlobalStyle from "./styles/global"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>

      <GlobalStyle/>
      
      <Edit/>

    </ThemeProvider>
    
  </React.StrictMode>,
)
