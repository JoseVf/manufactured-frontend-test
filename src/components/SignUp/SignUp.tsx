import { useState } from 'react';
import jwtDecode from 'jwt-decode';
import { useForm } from 'react-hook-form';
import { Button, toaster } from 'rsuite';
import { useSearchParams, useNavigate } from "react-router-dom";

import { SignUpMutation, useSignUpMutation, SignUpMutationVariables, SignUpInput } from "../../generated/graphql";
import graphqlRequestClient from "../../clients/graphQLRequestClient";

import { passwordValidationFn, passwordValidationMessage } from '../../utils/formValidations';

import Card from '../../shared/Card';
import Toast from "../../shared/Toast";

interface DecodedToken {
  service: string;
  identifier: string;
  aud: string;
  exp: number;
  iss: string;
}

type Organization = {
  name: string;
  title: string;
}

interface Inputs {
  email: string;
  firstName: string;
  lastName?: string;
  password: string;
  repeatPassword: string;
  organization: Organization;
}

const SignUp = () => {
  const navigate = useNavigate();
  const [disabled, setDisabled] = useState<boolean>(false);

  const { mutate } = useSignUpMutation<Error>(graphqlRequestClient(), {
    onSuccess: (data: SignUpMutation, _variables: SignUpMutationVariables, _context: unknown) => {
      localStorage.setItem('token', data.signUp.token);
      navigate('/home');
    },
    onError: () => {
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

  const { register, handleSubmit, watch, formState: { errors } } = useForm<Inputs>();

  try {
    const [searchParams] = useSearchParams();

    const token = searchParams.get('token') as string;
    const registeredEmail = jwtDecode<DecodedToken>(token).identifier;

    const onSubmit = (formInputs: Inputs) => {
      setDisabled(true);
      const data: SignUpInput = {
        token,
        email: registeredEmail,
        firstName: formInputs.firstName,
        lastName: formInputs.lastName || null,
        password: formInputs.password,
        organization: formInputs.organization
      }
      mutate({ input: data });
    }

    const password = watch('password');

    return (token && registeredEmail) ? (
      <Card>
        <h1>Sign Up</h1>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className='signUp__field flex column'>
            <label>Email</label>
            <input defaultValue={registeredEmail} readOnly className='input rs-input' {...register('email')} />
          </div>
          <div className='signUp__fields-container'>
            <div className='flex column'>
              <label>First name</label>
              <input className='input rs-input' {...register('firstName', { required: true })} />
            </div>
            <div className='flex column'>
              <label>Last name</label>
              <input className='input rs-input' {...register('lastName')} />
            </div>
          </div>
          <div className='signUp__fields-container'>
            <div className='flex column'>
              <label>Password</label>
              <input type='password' className='input rs-input' {...register('password', { required: true })} />
            </div>
            <div className='flex column'>
              <label>Repeat your password</label>
              <input type='password' className='input rs-input' {...register('repeatPassword', { required: true, validate: (value: string) => passwordValidationFn(password, value) || passwordValidationMessage })} />
              <p className='error-text'>{errors.repeatPassword?.message}</p>
            </div>
          </div>
          <h4>Organization</h4>
          <div className='signUp__fields-container'>
            <div className='flex column'>
              <label>Name</label>
              <input className='input rs-input' {...register('organization.name', { required: true })} />
            </div>
            <div className='flex column'>
              <label>Title</label>
              <input className='input rs-input' {...register('organization.title', { required: true })} />
            </div>
          </div>
          <Button className='button' color='green' appearance="primary" type='submit' disabled={disabled}>
            Sign up
          </Button>
        </form>
      </Card >
    ) : (
      <Card>
        <h1>No token detected!</h1>
      </Card>
    )
  } catch {
    return (
      <Card>
        <h1>Malformed token</h1>
      </Card>
    )
  }
}

export default SignUp;
