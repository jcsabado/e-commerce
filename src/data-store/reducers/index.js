import * as fetchReducer from './r_fetch'
import * as createReducer from './r_create'
import * as updateReducer from './r_update'
import * as deleteReducer from './r_delete'

export default {
  ...fetchReducer,  
  ...createReducer,
  ...updateReducer,
  ...deleteReducer,
};