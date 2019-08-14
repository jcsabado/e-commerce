// ********** FETCH ACTIONS **********
export const fetchDataStart = (data) => {
   return {
     type: 'FETCH_DATA_START',
     data
   }
 }
 export const fetchDataSuccess = (data) => {
   return {
     type: 'FETCH_DATA_SUCCESS',
     data
   }
 }
 export const fetchDataFailed = (err) => {
   return {
     type: 'FETCH_DATA_FAILED',
     err
   }
 }
 export const fetchDataError = (err) => {
   return {
     type: 'FETCH_DATA_ERROR',
     err
   }
 }
 export const fetchDataReset = () => {
   return {
     type: 'FETCH_DATA_RESET'
   }
 }