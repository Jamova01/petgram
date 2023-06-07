import React, { useContext } from 'react'
import { gql, useMutation } from '@apollo/client'
import { useInputValue } from '../hooks/useInputValue'
import { Context } from '../Context'

const LOGIN = gql`
  mutation login($input: UserCredentials!){
    login(input: $input)
  }
`
export const withLoginMutation = (WrappedComponent) => {
  return () => {
    const email = useInputValue('georgebyt01@gmail.com')
    const password = useInputValue('12345')
    const { activateAuth } = useContext(Context)
    const [mutation, { loading, error }] = useMutation(LOGIN)

    const handleSubmit = (event) => {
      event.preventDefault()
      mutation({ variables: { input: { email: email.value, password: password.value } } }).then(({ data }) => {
        const { login } = data
        console.log(login)
        activateAuth(login)
      }).catch((error) => {
        console.log(error)
      })
    }

    return (
      <WrappedComponent
        mutation={mutation}
        onSubmit={handleSubmit}
        title='Iniciar sesión'
        disabled={loading}
        email={email}
        password={password}
      />
    )
  }
}
