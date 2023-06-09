import React, { Fragment } from 'react'
import { Img, ImgWrapper, Article } from './styles'
// import { useLocalStorage } from '../../hooks/useLocalStorage'
import { useNearScreen } from '../../hooks/useNearScreen'
import { Link } from 'react-router-dom'
import ToggleLikeMutation from '../../container/ToggleLikeMutation'
const DEFAULT_IMAGE = 'https://res.cloudinary.com/midudev/image/upload/w_300/q_80/v1560262103/dogs.png'

export const PhotoCard = ({ id, liked, likes = 0, src = DEFAULT_IMAGE }) => {
  const [show, ref] = useNearScreen()

  return (
    <Article ref={ref}>
      {
        show && <>
          <Link to={`/detail/${id}`}>
            <ImgWrapper>
              <Img src={src} />
            </ImgWrapper>
          </Link>
          <ToggleLikeMutation
            photoId={id}
            likes={likes}
            liked={liked}
          />
                </>
      }

    </Article>
  )
}
