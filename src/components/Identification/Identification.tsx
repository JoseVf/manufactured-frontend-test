import { useState } from 'react';
import { useNavigate } from "react-router";
import { InputGroup, toaster } from 'rsuite';
import { Search } from '@rsuite/icons';
import { useForm } from 'react-hook-form';

import graphqlRequestClient from "../../clients/graphQLRequestClient";
import { useRequestSignUpMutation } from "../../generated/graphql";

import parseError, { Errors } from "../../utils/parseError";
import { emailValidationPattern, emailValidationMessage } from '../../utils/formValidations';

import Card from '../../shared/Card';
import Toast from '../../shared/Toast';

type Inputs = {
  email: string;
}

const Identification = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(false);

  const { register, handleSubmit, formState: { errors } } = useForm<Inputs>();

  const { mutate } = useRequestSignUpMutation<Error>(graphqlRequestClient(), {
    onSuccess: () => {
      toaster.push(
        <Toast
          title='Success!'
          type='success'
          message='Check your inbox and follow the sign up process'
        />,
        {
          placement: 'topStart'
        });
    },
    onError: (error: Error) => {
      const parsedError = parseError(error);
      const registeredEmail = parsedError.errors.some((error: Errors) => error.code === 'CONFLICT');
      if (registeredEmail) {
        toaster.push(
          <Toast
            title='Email found!'
            type='success'
            message='Please sign in using the form below.'
          />,
          {
            placement: 'topStart'
          });
        navigate(`/signIn?email=${parsedError?.variables?.email}`);
      } else {
        toaster.push(
          <Toast
            title='Error!'
            type='error'
            message='Something went wrong.'
          />,
          {
            placement: 'topStart'
          });
      }
    },
    onSettled: () => {
      setDisabled(false);
    }
  });

  function onSubmit(formInputs: Inputs) {
    setDisabled(true);
    mutate({ email: formInputs.email });
  }

  return (
    <Card>
      <h1>Identify yourself!</h1>
      <h5>Type your email address in the input below.</h5>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup className='input-container'>
          <input className='input rs-input' {...register('email', {required: true, pattern: {value: emailValidationPattern, message: emailValidationMessage}})} />
          <InputGroup.Button type='submit' disabled={disabled}>
            <Search />
          </InputGroup.Button>
        </InputGroup>
        <p className='error-text'>{errors.email?.message}</p>
      </form>
    </Card>
  )
}

export default Identification;
