import "./global.css"

import { router } from "./routes"
import { Toaster } from "sonner"
import { RouterProvider } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"
import { ThemeProvider } from "./components/theme/theme-provider"

export function App() {
  return (
    <HelmetProvider>
      <ThemeProvider storageKey="pizza-shop-theme" defaultTheme="dark">
        <Helmet titleTemplate="%s | Pizza Shop" />
        <Toaster richColors />
        <RouterProvider router={router} />
      </ThemeProvider>
    </HelmetProvider>
  )
}