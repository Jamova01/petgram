import React from 'react'

// Router DOM
import { createRoot } from 'react-dom/client'

// Apollo
import { ApolloClient, ApolloProvider, ApolloLink, InMemoryCache, HttpLink, concat } from '@apollo/client'

// Context
import { Provider } from './Context'

import { App } from './App'

const httpLink = new HttpLink({ uri: 'https://petgram-server-jamova01.vercel.app/graphql' })

const authMiddleware = new ApolloLink((operation, forward) => {
  const token = window.sessionStorage.getItem('token')
  const authorization = token ? `Bearer ${token}` : ''
  operation.setContext({
    headers: {
      authorization
    }
  })

  return forward(operation)
})

const client = new ApolloClient({
  cache: new InMemoryCache(),
  link: concat(authMiddleware, httpLink)
})

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>
)
