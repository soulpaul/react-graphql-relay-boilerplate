import * as styledComponents from 'styled-components'
import { mix} from 'polished'
import React from 'react'
import { ThemedStyledComponentsModule } from 'styled-components'

interface IProps extends React.HTMLAttributes<HTMLDivElement> {}

const colorBluePrimary = '#3369FF'
const colorBlackPrimary = '#000000'

const theme = {
  colors: {
    // black
    colorBlack: mix(0.05, 'white', colorBlackPrimary),
    // example palette for blue
    colorBlue10: mix(0.95, 'white', colorBluePrimary),
    colorBlue50: mix(0.9, 'white', colorBluePrimary),
    colorBlue100: mix(0.8, 'white', colorBluePrimary),
    colorBlue200: mix(0.6, 'white', colorBluePrimary),
    colorBlue300: mix(0.4, 'white', colorBluePrimary),
    colorBlue400: mix(0.2, 'white', colorBluePrimary),
    colorBlue500: colorBluePrimary,
    colorBlue600: mix(0.2, 'black', colorBluePrimary),
    colorBlue700: mix(0.4, 'black', colorBluePrimary),
    colorBlue800: mix(0.6, 'black', colorBluePrimary),
    colorBlue900: mix(0.8, 'black', colorBluePrimary),
  },
}

export type ITheme = typeof theme
const {
  default: styled,
  css,
  createGlobalStyle,
  ThemeProvider,
  ThemeConsumer,
  keyframes
} = (styledComponents as any) as ThemedStyledComponentsModule<ITheme>

export { css, createGlobalStyle, keyframes, ThemeProvider, ThemeConsumer }
export default styled
export const Theme = ({ children }: IProps) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
)
