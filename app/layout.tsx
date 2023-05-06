import '@styles/globals.css'
import Nav from '@components/Nav'
import Provider from '@components/Provider'

type RootLayoutProps = {
  children: React.ReactNode
}

export const metadata = {
  title: 'Prompto',
  description: 'Prompto is a simple, modern, and fast AI-Powered prompt generator.',
}

const RootLayout = ({children}: RootLayoutProps) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>

        <main className="app">
          <Nav />
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout