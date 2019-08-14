// ********** UPDATE ACTIONS **********
export const updateStart = (data) => {
   return {
     type: 'UPDATE_START',
     data
   }
 }
 export const updateSuccess = (data, processedID) => {
   return {
     type: 'UPDATE_SUCCESS',
     data,
     processedID
   }
 }
 export const updateFailed = (err) => {
   return {
     type: 'UPDATE_FAILED',
     err
   }
 }
 export const updateError = (err) => {
   return {
     type: 'UPDATE_ERROR',
     err
   }
 }
 export const updateReset = () => {
   return {
     type: 'UPDATE_RESET'
   }
 }