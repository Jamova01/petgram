import React from 'react';
import { FavButton } from '../components/FavButton';
import { withToggleLikeMutation } from '../hoc/withToggleLikeMutation';

const ToggleLikeMutation = ({ liked, likes, photoId, onClick, setLiked }) => {
  return <FavButton liked={liked} likes={likes} photoId={photoId} onClick={onClick} setLiked={setLiked} />
}

export default withToggleLikeMutation(ToggleLikeMutation)
