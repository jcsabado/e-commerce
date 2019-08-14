// ********** DELETE REDUCER **********
const initState_Delete = {
   deleted: false,
   deleting: false,
   data: [],
   response: null,
 }
 export const r_Delete = (state = initState_Delete, action) => {
   switch (action.type) {
     case 'DELETE_START':
       return {
         ...state,
         deleting: true,
       }
     case 'DELETE_SUCCESS':
       return {
         ...state,
         deleting: false,
         deleted: true,
         data: action.data,
         response: action
       }
     case 'DELETE_FAILED':
       return {
         ...state,
         deleting: false,
         deleted: false,
         response: action
       }
     case 'DELETE_ERROR':
       // throw new Error('Create Error => ' + action)
       return {...state}
     case 'DELETE_RESET':
       return {
         ...state,
         data: [],
         deleted: false,
         deleting: false,
         response: null
       }
     default:
       return state;
   }
 }