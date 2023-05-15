import React, { Fragment } from 'react'
import { ListOfCategories } from '../components/ListOfCategories'
import ListOfPhotoCardsContainer from '../container/ListOfPhotoCardsContainer'

export const HomePage = () => {
  return (
    <Fragment>
      <ListOfCategories />
      <ListOfPhotoCardsContainer />
    </Fragment>
  )
}
