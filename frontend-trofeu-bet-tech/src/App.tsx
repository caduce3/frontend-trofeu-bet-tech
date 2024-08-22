import './global.css'
import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'
import { router } from './routes'
import { Toaster } from 'sonner'
import { ThemeProvider } from './components/theme/theme-provider'

export function App() {

  return (
    <HelmetProvider>
      <ThemeProvider storageKey='trofeubet-theme' defaultTheme='dark'>
        <Helmet titleTemplate='%s | Trofeu.bet'/>
        <Toaster richColors/>
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}