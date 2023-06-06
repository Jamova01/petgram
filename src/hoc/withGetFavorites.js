import React from 'react'
import { gql, useQuery } from '@apollo/client'

const GET_FAVS = gql`
  query getFavs {
    favs {
      id
      categoryId
      src
      likes
      userId
    }
  }
`

export const withGetFavorites = (WrappedComponent) => {
  return () => {
    const { loading, error, data } = useQuery(GET_FAVS, {
      fetchPolicy: 'cache-and-network'
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const { favs } = data
    return <WrappedComponent data={favs} />
  }
}
