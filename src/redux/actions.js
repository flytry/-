import { reqLogin } from "../api";
import {setItem} from '../utils/storage';
import {SAVE_USER} from './action-types';


const saveUser=user =>({type:SAVE_USER,data:user});
export const saveUserAsync=(username,password)=>{
  return dispatch =>{
    return reqLogin(username,password)
      .then(response=>{
        setItem('user',response);
        dispatch(saveUser(response));
      });
    };
  };