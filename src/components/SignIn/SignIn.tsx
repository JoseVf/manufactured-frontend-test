import { useState } from 'react';
import { useNavigate } from "react-router";
import { useSearchParams } from "react-router-dom";
import { InputGroup, Button, toaster } from 'rsuite';
import { Email, CharacterLock } from '@rsuite/icons';
import { useForm } from 'react-hook-form';

import graphqlRequestClient from "../../clients/graphQLRequestClient";
import { SignInMutation, useSignInMutation, SignInMutationVariables } from "../../generated/graphql";

import { emailValidationPattern, emailValidationMessage } from '../../utils/formValidations';
import parseError, { Errors } from '../../utils/parseError';

import Card from "../../shared/Card";
import Toast from "../../shared/Toast";

type Inputs = {
  email: string;
  password: string;
}

const SignIn = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [disabled, setDisabled] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const email = searchParams.get('email') || '';

  const { mutate } = useSignInMutation<Error>(graphqlRequestClient(), {
    onSuccess: async (data: SignInMutation, _variables: SignInMutationVariables, _context: unknown) => {
      await localStorage.setItem('token', data.signIn.token);
      navigate('/home');
    },
    onError: (error: Error) => {
      const parsedError = parseError(error);
      const invalidCredentials = parsedError.errors.some((error: Errors) => error.code === 'BAD_USER_INPUT');
      if (invalidCredentials)
        toaster.push(
          <Toast
            title='Error!'
            type='error'
            message='Invalid username or password'
          />,
          {
            placement: 'topStart'
          });
      else
        toaster.push(
          <Toast
            title='Error!'
            type='error'
            message='Something went wrong.'
          />,
          {
            placement: 'topStart'
          });
    },
    onSettled: () => {
      setDisabled(false);
    }
  });

  function onSubmit(formInputs: Inputs) {
    setDisabled(true);
    mutate({
      input: formInputs
    });
  }

  return (
    <Card>
      <h1>Sign In</h1>
      <h5>Type your email address and password below.</h5>
      <form className='signIn__form center column' onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className='input-container'>
          <InputGroup.Addon>
            <Email />
          </InputGroup.Addon>
          <input defaultValue={email} className='input rs-input' {...register('email', { required: true, pattern: { value: emailValidationPattern, message: emailValidationMessage } })} />
        </InputGroup>
        <p className='error-text'>{errors.email?.message}</p>
        <InputGroup className='input-container'>
          <InputGroup.Addon>
            <CharacterLock />
          </InputGroup.Addon>
          <input type='password' className='input rs-input' {...register('password', { required: true })} />
        </InputGroup>
        <p className='error-text'>{errors.password?.message}</p>
        <Button className='button' color='green' appearance="primary" type='submit' disabled={disabled}>
          Sign in
        </Button>
      </form>
    </Card>
  )
}

export default SignIn;
