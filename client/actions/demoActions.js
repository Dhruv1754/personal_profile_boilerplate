import callApi from './apiCaller.js'

export const COUNTER_INC = 'COUNTER_INC';
export const COUNTER_DEC = 'COUNTER_DEC';

export function inc(data) {
  return (dispatch) =>
     {     
      return callApi('backend_call','post',data).then(res=>{
      
      console.log('data got back', res.data)
      });
     }
 }

export const dec = () => ({
  type: COUNTER_DEC,
})

export function stuff(data) {
  return (dispatch) =>
     {
          
      return callApi('backend_call','post',data).then(res=>{
         
         dispatch(simpleAction(res.data))
      });
     }
}