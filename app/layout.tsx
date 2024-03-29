'use client'
import Header from '@/components/header/Header'
import Footer from '@/components/footer/Footer'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';

const inter = Inter({ subsets: ['latin'] })
export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}


const client = new ApolloClient({
  uri: 'https://flyby-router-demo.herokuapp.com/',
  cache: new InMemoryCache(),
});



export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ApolloProvider client={client}>
    <html lang="en">
      <body className={inter.className}>
        <Header/>
          {children}
        <Footer/>
      </body>
    </html>
    </ApolloProvider>
  )
}




// const client = ...

client
  .query({
    query: gql`
      query GetLocations {
        locations {
          id
          name
          description
          photo
        }
      }
    `,
  })
  .then((result) => console.log(result));