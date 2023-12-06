import {Suspense} from 'react'
import Router from 'routers'
// providers
import {ThemeProvider} from 'providers/theme'
import UserProvider from 'providers/user'

const App = () => {
  return (
    <Suspense fallback={<div>loading ...</div>}>
      <ThemeProvider>
        <UserProvider>
          <Router />
        </UserProvider>
      </ThemeProvider>
    </Suspense>
  )
}

export default App
