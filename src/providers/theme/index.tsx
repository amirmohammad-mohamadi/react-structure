import {CssBaseline} from '@mui/material'
import {
  createTheme,
  StyledEngineProvider,
  ThemeProvider as MuiThemeProvider,
} from '@mui/material/styles'
import breakpoints from './breakpoints'
import components from './components'
import palette from './palette'
import shadows, {customShadows} from './shadows'
import shape from './shape'
import typography from './typography'

interface IThemeProvider {
  children: React.ReactNode
}

export const ThemeProvider: React.FC<IThemeProvider> = ({children}) => {
  const theme = createTheme({
    palette: palette.light,
    shape,
    typography,
    shadows,
    breakpoints,
    components,
    spacing: 10,
    // @ts-ignore
    customShadows,
  })
  // prettier-ignore
  return (
    // @ts-ignore
    <StyledEngineProvider injectFirst><MuiThemeProvider theme={theme}><CssBaseline />
        {children}
      </MuiThemeProvider>
    </StyledEngineProvider>
  );
}
