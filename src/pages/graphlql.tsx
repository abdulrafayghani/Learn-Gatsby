import React from 'react';
import { useQuery, gql } from '@apollo/client';

const Graphlql = () => {
  const ApolloQuery = gql`
    {
      message
    }
  `;

  const { data, loading, error } = useQuery(ApolloQuery);
  return (
    <div>
      <h2>
        Data Received from Apollo Client at runtime from Serverless Function:
      </h2>
      {loading && <p>Loading Client Side Querry...</p>}
      {error && <p>Error: ${error.message}</p>}
      {data && data.message && <div>{data.message}</div>}
    </div>
  );
};

export default Graphlql;
