import React, { Fragment } from 'react'
import { Form, Input, Title } from './styles'
import { SubmitButton } from '../SubmitButton'

export const UserForm = ({ onSubmit, title, disabled, email, password }) => {

  return <Fragment>
    <Title>{title}</Title>
    <Form onSubmit={onSubmit}>
      <Input
        placeholder='Email'
        disabled={disabled}
        {...email} />
      <Input
        placeholder='Password'
        type='password'
        disabled={disabled}
        {...password} />
      <SubmitButton
        disabled={disabled}>
        {title}
      </SubmitButton>
    </Form>
  </Fragment>
}
