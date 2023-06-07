import React from 'react'
import { withPhoto } from '../hoc/withPhoto'
import { PhotoCard } from '../components/PhotoCard'

const PhotoCardWithQuery = ({ id, likes, src }) => {
  return <PhotoCard id={id} likes={likes} src={src} />
}

export default withPhoto(PhotoCardWithQuery)
