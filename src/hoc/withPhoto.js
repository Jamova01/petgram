import React from 'react'
import { useQuery, gql } from '@apollo/client'

export const withPhoto = (WrappedComponent) => {
  return ({ id }) => {
    const GET_SINGLE_PHOTO = gql`
      query GetPhoto($id: ID!) {
        photo(id: $id) {
          id
          likes
          src
        }
      }
    `

    const { loading, error, data } = useQuery(GET_SINGLE_PHOTO, {
      variables: { id }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    const { photo = {} } = data

    return <WrappedComponent {...photo} />
  }
}
