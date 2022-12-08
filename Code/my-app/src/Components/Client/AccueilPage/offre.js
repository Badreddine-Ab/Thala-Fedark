// import React from 'react'
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import { useQuery, gql } from "@apollo/client";

const Get_PRODUITS = gql`
  {
    launchesPast(limit: 3) {
      launch_date_local
      launch_date_unix
      mission_name
      details
    }
  }
`;

export default function Offre() {
  const { error, data, loading } = useQuery(Get_PRODUITS);
  console.log({ error, data, loading });
  if (loading) return <div>Loading...</div>;
  if (error) return <div>something went wrong...</div>;

  return (
        <div className="container pb-16">
        <a href="#">
            <img src="https://files.fm/thumb_show.php?i=4efucxa83" alt="ads" className="w-full" />
        </a>
    </div>

  );
}
