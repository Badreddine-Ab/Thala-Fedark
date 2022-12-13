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


  
 
//  const Client = new ApolloClient({
//   link: new WebSocketLink({
//     uri: "ws://sincere-dodo-96.hasura.app/v1/graphql",
//     options: {
//       reconnect: true,
//       connectionParams: {
//         Username:"x-hasura-admin-secret",
//         password:`7U2IMgzci9Iblde1SHZ8VmyWc2pJ4pZ7trJUoVE1gcM88lWrQflCUZL0O1OfmU64`
//         }
//       }
//     }
//   ),
//   cache: new InMemoryCache()
//  });
 

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <ApolloProvider client={Client}>
          <App />
     </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

