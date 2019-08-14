// ********** CREATE REDUCER **********
const initState_Create = {
   created: false,
   creating: false,
   data: {},
   // data: [],
   response: null,
   processedID: null
 }
 export const r_Create = (state = initState_Create, action) => {
   switch (action.type) {
     case 'CREATE_START':
       return {
         ...state,
         creating: true,
       }
     case 'CREATE_SUCCESS':
       return {
         ...state,
         creating: false,
         created: true,
         data: action.data,
         response: action,
         processedID: action.processedID
       }
     case 'CREATE_FAILED':
       return {
         ...state,
         creating: false,
         created: false,
         response: action
       }
     case 'CREATE_ERROR':
       // throw new Error('Create Error => ' + action)
       return {...state}
     case 'CREATE_RESET':
       return {
         ...state,
         data: {},
         // data: [],
         created: false,
         creating: false,
         response: null
       } 
     default:
       return state;
   }
 }