import React from 'react'
import { useQuery, gql } from '@apollo/client'

export const withPhotos = (WrappedComponent) => {
  return ({ categoryId }) => {
    const GET_PHOTOS = gql`
      query GetPhotos($categoryId: ID) {
        photos(categoryId: $categoryId) {
          id
          categoryId
          src
          likes
          userId
          liked
        }
      }
    `

    const { loading, error, data } = useQuery(GET_PHOTOS, {
      variables: { categoryId }
    })

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error.message}</p>

    return <WrappedComponent data={data} />
  }
}
