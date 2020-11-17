import React from "react"
import { Theme, createGlobalStyle } from '../styles'


const GlobalStyle = createGlobalStyle`
  body, html {
    /* global styles for your components go here */
  }
`

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
}

export const decorators = [(Story) => <Theme><GlobalStyle /><Story /></Theme>];