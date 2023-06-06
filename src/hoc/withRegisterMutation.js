import React, { useContext } from 'react';
import { gql, useMutation } from '@apollo/client';
import { useInputValue } from '../hooks/useInputValue';
import { Context } from '../Context';

const REGISTER = gql`
  mutation signup($input: UserCredentials!){
    signup(input: $input)
  }
`
export const withRegisterMutation = (WrappedComponent) => {
  return () => {
    const email = useInputValue('georgebyt01@gmail.com')
    const password = useInputValue('12345')
    const { activateAuth } = useContext(Context)
    const [mutation, { loading, error }] = useMutation(REGISTER)

    const handleSubmit = (event) => {
      event.preventDefault()
      mutation({ variables: { input: { email: email.value, password: password.value } } }).then(({ data }) => {
        const { signup } = data
        console.log(signup);
        activateAuth(signup)
      }).catch((error) => {
        console.log(error);
      })
    }

    return (
      <WrappedComponent
        mutation={mutation}
        onSubmit={handleSubmit}
        title='Registrarse'
        disabled={loading}
        email={email}
        password={password}
      />
    )
  }
}
