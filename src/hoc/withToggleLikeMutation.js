import React from 'react'
import { gql, useMutation } from '@apollo/client'

const LIKE_PHOTO = gql`
  mutation likePhoto($input: LikePhoto!) {
    likePhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`

export const withToggleLikeMutation = (WrappedComponent) => {
  return ({ photoId, liked, likes }) => {

    const [toggleLike] = useMutation(LIKE_PHOTO)

    const handleToggleLike = async () => {
      try {
        await toggleLike({
          variables: { input: { id: photoId } },
        });
      } catch (error) {
        console.error('Error al ejecutar la mutación:', error)
      }
    }

    return (
      <WrappedComponent
        liked={liked}
        likes={likes}
        onClick={handleToggleLike}
      />
    )
  }
}
