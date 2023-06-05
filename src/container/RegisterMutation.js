import React from 'react'
import { UserForm } from '../components/UserForm'
import { withRegisterMutation } from '../hoc/withRegisterMutation'

const RegisterMutation = ({ disabled, title, onSubmit, email, password, mutation }) => {
  return <UserForm
    onSubmit={onSubmit}
    mutation={mutation}
    title={title}
    disabled={disabled}
    email={email}
    password={password} />

}

export default withRegisterMutation(RegisterMutation)
