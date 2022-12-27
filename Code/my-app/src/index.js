import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache} from "@apollo/client";
import {onError} from '@apollo/client/link/error'



 const Client = new ApolloClient({
  uri:"http://localhost:9090/graphql",
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


