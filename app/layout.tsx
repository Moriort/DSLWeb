import type React from "react"
import type { Metadata } from "next"
import { Inter, Space_Grotesk, Outfit } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/common/theme-provider"
import { ActiveSectionProvider } from "@/components/Header/ActiveSectionContext"

const inter = Inter({ subsets: ["latin"] })
const spaceGrotesk = Space_Grotesk({ 
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk" 
})
const outfit = Outfit({ 
  subsets: ["latin"], 
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-outfit" 
})

export const metadata: Metadata = {
  title: "Digital Strong Locking - Desarrollo de Aplicaciones Web y Android para Empresas",
  description:
    "Especialistas en desarrollo de aplicaciones Web y Android personalizadas para empresas. Transformamos su negocio con soluciones únicas para aumentar su producción.",
  generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es" suppressHydrationWarning>
      <head>
        <link rel="preload" href="/fonts/Quantify.ttf" as="font" type="font/ttf" crossOrigin="" />
      </head>
      <body className={`${inter.className} ${spaceGrotesk.variable} ${outfit.variable} min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-zinc-950 text-zinc-100 antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem={false} disableTransitionOnChange>
          <ActiveSectionProvider>
            <div className="relative mx-auto min-h-screen">
              {children}
            </div>
          </ActiveSectionProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}