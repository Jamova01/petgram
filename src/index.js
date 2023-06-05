import React from 'react'

// Router DOM
import { createRoot } from 'react-dom/client'

// Apollo
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client";

// Context
import { Provider } from './Context';

import { App } from './App'

const client = new ApolloClient({
  uri: 'https://petgram-server-jamova01.vercel.app/graphql',
  cache: new InMemoryCache(),
})

const container = document.getElementById('app')
const root = createRoot(container)

root.render(
  <Provider>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </Provider>

);
