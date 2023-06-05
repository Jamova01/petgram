import React from 'react'
import { UserForm } from '../components/UserForm'
import { withLoginMutation } from '../hoc/withLoginMutation'

const LoginMutation = ({ disabled, title, onSubmit, email, password, mutation }) => {
  return <UserForm
    mutation={mutation}
    onSubmit={onSubmit}
    title={title}
    disabled={disabled}
    email={email}
    password={password} />

}

export default withLoginMutation(LoginMutation)
