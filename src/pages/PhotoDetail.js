import React, { Fragment } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PhotoCardWithQuery from '../container/PhotoCardWithQuery';

export const PhotoDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const handleGoBack = () => {
    navigate(-1); // Navegar hacia atrás en la historia
  };

  return (
    <Fragment>
      <PhotoCardWithQuery id={id} />
      <button onClick={handleGoBack}>Go Back</button>
    </Fragment>
  )
}
