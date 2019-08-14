// ********** FETCH REDUCER **********
const initState_Fetch = {
  fetched: false,
  fetching: false,
  data: [],
  response: null
};
export const r_Fetch = (state = initState_Fetch, action) => {
  switch (action.type) {
    case "FETCH_DATA_START":
      return {
        ...state,
        fetching: true
      };
    case "FETCH_DATA_SUCCESS":
      return {
        ...state,
        fetching: false,
        fetched: true,
        data:
          action.data.objects && action.data.objects.findcar
            ? action.data.objects.findcar.results
            : action.data.objects.findcart.results,
        //  data: action.data.objects.findcar,
        response: action
      };
    case "FETCH_DATA_FAILED":
      return {
        ...state,
        fetching: false,
        fetched: false,
        response: action
      };
    case "FETCH_DATA_ERROR":
      // throw new Error('Create Error => ' + action)
      return { ...state };
    case "FETCH_DATA_RESET":
      return {
        ...state,
        data: [],
        fetched: false,
        fetching: false,
        response: null
      };
    default:
      return state;
  }
};
