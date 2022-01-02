import { useEffect } from 'react';
import { useNavigate } from "react-router";
import { Button } from 'rsuite';

import graphqlRequestClient from "../../clients/graphQLRequestClient";
import { MeQuery, useMeQuery } from '../../generated/graphql';
import { formatDate } from '../../utils/formatDate';

import Card from '../../shared/Card';

const Homepage = () => {
  const navigate = useNavigate();

  const token = localStorage.getItem('token');
  const headers = token ? { headers: { Authorization: `Bearer ${token}` } } : {};

  const { isLoading, data, isFetching } = useMeQuery<MeQuery, Error>(graphqlRequestClient(headers));

  const logOut = () => {
    localStorage.removeItem('token');
    navigate('/');
  }

  useEffect(() => {
    if (!data?.me && !isLoading && !isFetching) navigate('/');
  }, [data, navigate, isLoading, isFetching]);

  return (
    <Card>
      <h1>Welcome, {data?.me?.firstName} {data?.me?.lastName}</h1>
      <div className='home__user-info column'>
        <span className='home__secondary-text'>{data?.me?.email}</span>
        <span className='home__secondary-text'>Created at: {formatDate(data?.me?.createdAt)}</span>
      </div>
      <h3>Memberships</h3>
      <div className='home__memberships-container'>
        {data?.me?.memberships.map((membership, index) =>
          <Card panelClassName='home__membership-card' key={`${membership?.role}${index}`}>
            <h4>{membership?.role}</h4>
            <p>{membership?.org?.name}, {membership?.org?.kind}</p>
            <span className='home__secondary-text'>Created at: {formatDate(membership?.org?.createdAt)}</span>
          </Card>
        )}
      </div>
      <Button className='button' color='red' appearance="primary" onClick={logOut}>
        Log Out
      </Button>
    </Card>
  )
}

export default Homepage;
