import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header/Header'
import DataContextProvider from '@/context/dataContext'
import Footer from '@/components/Footer'
import ToastComponent from '@/components/ToastComponent'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <DataContextProvider>
          <Header />
          <ToastComponent />
          {children}
          <Footer />
        </DataContextProvider>
      </body>
    </html>
  )
}
