import './globals.css'
import type { Metadata } from 'next'
import { Montserrat, Oxanium } from 'next/font/google'

export const metadata: Metadata = {
  title: 'devstage',
}

// definindo como a gente vai usar as fontes no projeto
const oxanium = Oxanium({
  weight: ['500', '600'],
  subsets: ['latin'], // padrão de caractéres
  variable: '--font-oxanium', // a variável tailwind para aplicar a fonte
})

const montserrat = Montserrat({
  weight: ['400', '600'],
  subsets: ['latin'], // padrão de caractéres
  variable: '--font-montserrat', // a variável tailwind para aplicar a fonte
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${oxanium.variable} ${montserrat.variable}`}>
      <body className="bg-gray-900 text-gray-100 antialiased bg-[url(/background.png)] bg-no-repeat bg-top md:bg-right-top">
        <main className="max-w-[1240px] mx-auto px-5 py-8 md:py-0">
          {children}
        </main>
      </body>
    </html>
  )
}
