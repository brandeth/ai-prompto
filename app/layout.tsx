import '@styles/globals.css'

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
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout