import React from 'react';
import { gql, useMutation } from '@apollo/client';

const LIKE_PHOTO = gql`
  mutation likeAnonymousPhoto($input: LikePhoto!) {
    likeAnonymousPhoto(input: $input) {
      id,
      liked,
      likes
    }
  }
`
export const withToggleLikeMutation = (WrappedComponent) => {
  return ({ photoId, liked, likes, setLiked }) => {

    const [toggleLike] = useMutation(LIKE_PHOTO);

    const handleToggleLike = () => {
      if (!liked) {
        toggleLike({
          variables: { input: { id: photoId } },

        });
        setLiked(!liked)
      }
    };

    return (
      <WrappedComponent
        liked={liked}
        likes={likes}
        onClick={handleToggleLike}
      />
    );
  }
}

