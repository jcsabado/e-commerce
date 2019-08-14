//THIRD PARTY IMPORTS
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloClient } from "apollo-client";
import { ApolloLink, concat } from "apollo-link";
import { setContext } from "apollo-link-context";
import { HttpLink } from "apollo-link-http";
import { SubscriptionClient } from "subscriptions-transport-ws";

let endpointURL = `https://parseapi.back4app.com/graphql`;

/*
 * * * * * * * * * * * * * * * * * * * * * * * * ENDPOINT SET UP * * * * * * * * * * * * * * * * * * * * * * * *
 */

//MIDDLEWARES
const endpointSetContext = new setContext((_, { headers }) => {
  return {
    headers: {
      ...headers,
      // Graph QL Credentials
      "X-Parse-Application-Id": "sgiPhHm43EYysvC1RJfEElBVUOlBAPgMuRmWZRXc",
      "X-Parse-Master-Key": "kS3Mh0dMVGDAxlSTDV7JXQ3jLIbp3gJIiAeykC5V",
      "X-Parse-Client-Key": "JGH8NZ3LHKKTNDnCMPtBRBBtb3cURnzxtMqzPPnf"
    }
  };
});

//AFTERWARES
const endpointApolloLink = new ApolloLink((operation, forward) => {
  return forward(operation).map(response => {
    const {
      response: { headers }
    } = operation.getContext();
    return response;
  });
});

let endpointURI = concat(
    endpointSetContext,
    new HttpLink({ uri: `${endpointURL}` })
  ),
  endpointBaseLink = concat(endpointApolloLink, endpointURI);

export const endpointBaseClient = new ApolloClient({
  // ssrMode: true,
  link: endpointBaseLink,
  cache: new InMemoryCache()
  // connectToDevTools: true
});
