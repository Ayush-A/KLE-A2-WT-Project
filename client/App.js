import React from 'react'
import MainRouter from './MainRouter'
import {BrowserRouter} from 'react-router-dom'
import {MuiThemeProvider, createMuiTheme} from 'material-ui/styles'
import {red, pink} from 'material-ui/colors'
import { hot } from 'react-hot-loader'

// Create a theme instance.
const theme = createMuiTheme({
  palette: {
    primary: {
    light: '#52c7b8',
    main: '#000',
    dark: '#00675b',
    contrastText: '#fff',
  },
  secondary: {
    light: '#fff',
    main: '#000',
    dark: '#c77800',
    contrastText: '#000',
  },
    openTitle: red['700'],
    protectedTitle: pink['700'],
    type: 'light'
  }
})

const App = () => (
  <BrowserRouter>
    <MuiThemeProvider theme={theme}>
      <MainRouter/>
    </MuiThemeProvider>
  </BrowserRouter>
)

export default hot(module)(App)
