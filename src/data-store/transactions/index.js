import {
  FetchActions,
  CreateActions,
  DeleteActions,
  UpdateActions
} from "../actions";

import { endpointBaseClient } from "../endpoint";

export const FetchData = (schemaName, data) => {
  // Normal Query
  return dispatch => {
    dispatch(FetchActions.fetchDataStart(data));
    endpointBaseClient
      .query({
        query: schemaName,
        variables: data,
        fetchPolicy: "network-only"
      })
      .then(response => {
        dispatch(FetchActions.fetchDataSuccess(response.data));
      })
      .catch(errors => {
        dispatch(FetchActions.fetchDataFailed(errors));
        // dispatch(FetchActions.fetchDataError(errors))
      });
  };
};

export const CreateData = (schemaName, data) => {
  // Normal Mutation
  return dispatch => {
    dispatch(CreateActions.createStart(data));
    endpointBaseClient
      .mutate({
        mutation: schemaName,
        variables: data
      })
      .then(response => {
        dispatch(CreateActions.createSuccess(response.data));
      })
      .catch(errors => {
        dispatch(CreateActions.createFailed(errors));
        // dispatch(CreateActions.createError(errors))
      });
  };
};
