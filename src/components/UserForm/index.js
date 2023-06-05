import React, { Fragment } from 'react'
import { Form, Input, Button, Title } from './styles'

export const UserForm = ({ onSubmit, title, disabled, email, password }) => {

  return (
    <Fragment>
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
        <Button
          disabled={disabled}>
          {title}
        </Button>
      </Form>

    </Fragment>

  )
}
