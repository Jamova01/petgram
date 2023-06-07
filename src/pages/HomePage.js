import React from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import ListOfPhotoCardsContainer from '../container/ListOfPhotoCardsContainer'
import { useParams } from 'react-router-dom'

export default () => {
  const { id } = useParams()
  return (
    <>
      <ListOfCategories />
      <ListOfPhotoCardsContainer categoryId={id} />
    </>
  )
}
