// ********** UPDATE REDUCER **********
const initState_Update = {
  updated: false,
  updating: false,
  //  data: [],
  data: {},
  response: null,
  processedID: null
}
export const r_Update = (state = initState_Update, action) => {
  switch (action.type) {
    case 'UPDATE_START':
      return {
        ...state,
        updating: true,
      }
    case 'UPDATE_SUCCESS':
      return {
        ...state,
        updating: false,
        updated: true,
        data: action.data,
        response: action,
        processedID: action.processedID
      }
    case 'UPDATE_FAILED':
      return {
        ...state,
        updating: false,
        updated: false,
        response: action
      }
    case 'UPDATE_ERROR':
      // throw new Error('Create Error => ' + action)
      return { ...state }
    case 'UPDATE_RESET':
      return {
        ...state,
        // data: [],
        data: {},
        updated: false,
        updating: false,
        response: null
      }
    default:
      return state;
  }
}