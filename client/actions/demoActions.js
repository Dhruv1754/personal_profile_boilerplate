import callApi from './apiCaller.js'

export const SIMPLE_ACTION1 = 'SIMPLE_ACTION1';
export const SIMPLE_ACTION2 = 'SIMPLE_ACTION2';

export function getMongoData(data) {
  return (dispatch) =>
     {     
      return callApi('backend_call','post',data).then(res=>{
      
      dispatch(simpleAction1(res.data))
      });
     }
 }

 export const simpleAction1 = (data) => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION1',
   payload: data
  })
 }


 export function dec(data) {
  return (dispatch) =>
     {     
      return callApi('backend_call','post',data).then(res=>{
      
      dispatch(simpleAction2(res.data))
      });
     }
 }

 export const simpleAction2 = (data) => dispatch => {
  dispatch({
   type: 'SIMPLE_ACTION2',
   payload: data
  })
 }