import React from 'react'
import { withPhotos } from '../hoc/withPhotos'
import { ListOfPhotoCards } from '../components/ListOfPhotoCards'

const ListOfPhotoCardsContainer = ({ data }) => {
  return <ListOfPhotoCards data={data} />
}
export default withPhotos(ListOfPhotoCardsContainer)
