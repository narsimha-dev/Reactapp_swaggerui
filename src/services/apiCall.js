import Axios from 'axios';
import globalPath from '../config/globalpath';
import { USER_TOKEN_HEADERS, USER_HEADERS } from '../config/params_header';
import LocallStore from '../config/Store';


export const loginCall=(success,failure,data)=>{
   Axios.post(globalPath.USER_PATH+'/api/oauth/token',data,USER_HEADERS)
   .then(respose=>{
      LocallStore.setToken("USERTOKEN",respose.data.token);
     success(respose.status)
   }).catch(error=>failure(error)) 
   } 

   export const signupCall=(success,failure,data)=>{   
      Axios.post(globalPath.USER_PATH+'/user/register',data,USER_HEADERS)
      .then(respose=>success(respose.status))
      .catch(error=>failure(error))      
      }

      export const addPostApiCall=(success,failure,data)=>{     
         Axios.post(globalPath.USER_PATH+'/api/posts/add',data,USER_TOKEN_HEADERS)
         .then(respose=>{
            success(respose.status)
         }).catch(error=>failure(error)) 
         }  
         
export const postApiCall=(success,failure)=>{
    Axios.get(globalPath.USER_PATH+'/api/posts',USER_TOKEN_HEADERS)
    .then(respose=>{
       success(respose.data)
    }).catch(error=>failure(error)) 
    }    
        