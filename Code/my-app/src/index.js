import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
;

 const Client = new ApolloClient({
  uri:"https://renewed-starling-61.hasura.app/v1/graphql",
  cache: new InMemoryCache(),
 })

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApolloProvider client={Client}>
          <App />
     </ApolloProvider>
  </React.StrictMode>
);


