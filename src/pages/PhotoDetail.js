import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { Layout } from '../components/Layout'
import PhotoCardWithQuery from '../container/PhotoCardWithQuery'

export default () => {
  const { id } = useParams()
  const navigate = useNavigate()

  const handleGoBack = () => {
    navigate(-1) // Navegar hacia atrás en la historia
  }

  return (
    <Layout title={`Fotografía ${id}`}>
      <PhotoCardWithQuery id={id} />
      <button onClick={handleGoBack}>Go Back</button>
    </Layout>
  )
}
