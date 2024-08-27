import "./global.css"

import { router } from "./routes"
import { Toaster } from "sonner"
import { RouterProvider } from "react-router-dom"
import { Helmet, HelmetProvider } from "react-helmet-async"

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Pizza Shop" />
      <Toaster richColors />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}