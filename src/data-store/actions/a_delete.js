// ********** DELETE ACTIONS **********
export const deleteStart = (data) => {
   return {
     type: 'DELETE_START',
     data
   }
 }
 export const deleteSuccess = (data) => {
   return {
     type: 'DELETE_SUCCESS',
     data
   }
 }
 export const deleteFailed = (err) => {
   return {
     type: 'DELETE_FAILED',
     err
   }
 }
 export const deleteError = (err) => {
   return {
     type: 'DELETE_ERROR',
     err
   }
 }
 export const deleteReset = () => {
   return {
     type: 'DELETE_RESET'
   }
 }