import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import ListOfPhotoCardsContainer from '../container/ListOfPhotoCardsContainer'
import { useParams } from 'react-router-dom'

export const HomePage = () => {
  const { id } = useParams()
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={id} />
    </Fragment>
  )
}
