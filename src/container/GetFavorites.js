import React from 'react'
import { withGetFavorites } from '../hoc/withGetFavorites'
import { ListOfFavorites } from '../components/ListOfFavorites'

const GetFavorites = ({ data }) => {
  return <ListOfFavorites favs={data} />
}

export default withGetFavorites(GetFavorites)
