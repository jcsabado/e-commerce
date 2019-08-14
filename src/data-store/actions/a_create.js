// ********** CREATE ACTIONS **********
export const createStart = (data) => {
   return {
     type: 'CREATE_START',
     data
   }
 }
 export const createSuccess = (data, processedID) => {
   return {
     type: 'CREATE_SUCCESS',
     data,
     processedID
   }
 }
 export const createFailed = (err) => {
   return {
     type: 'CREATE_FAILED',
     err
   }
 }
 export const createError = (err) => {
   return {
     type: 'CREATE_ERROR',
     err
   }
 }
 export const createReset = () => {
   return {
     type: 'CREATE_RESET'
   }
 }