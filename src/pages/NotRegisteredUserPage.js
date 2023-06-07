import React, { useContext } from 'react'
import { Context } from '../Context'
import { Navigate } from 'react-router-dom'
import RegisterMutation from '../container/RegisterMutation'
import LoginMutation from '../container/LoginMutation'

export default () => {
  const { isAuth } = useContext(Context)

  if (isAuth) {
    return <Navigate to='/' />
  }

  return (
    <>
      <RegisterMutation />
      <LoginMutation />
    </>
  )
}
