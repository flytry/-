import React from 'react';
import axios from 'axios';
import {message} from 'antd';

export default function Test() {
  const axiosInstance=axios.create({
    baseURL:'/api',
    timeout:20000,
    headers:{

    }
  });
  axiosInstance.interceptors.request.use(
    config => {
      if(token){
        config.headers.authorization=`Bearer ${token}`;
      }
      if(config.method === 'post'){
        const keys=Object.keys(config.data);
        const data=keys.reduce((prev,curr)=>{
            prev += `&${curr}=${config.data[curr]}`;
            return prev;
          },'').slice(1);
          config.data=data;
          config.headers['content-type']='application/x-www-form-urlencoded';
      }
      return config;
    }
  );
  axiosInstance.interceptors.response.use(
    response=>{
      if(response.data.status === 0) {
        return response.data.data;
      }else{
        return Promise.reject(response.data.msg);
      }
    },
    err =>{
      const errCode={
        401:'没有权限访问当前接口',
        403:'禁止访问当前接口',
        404:'当前资源未找到',
        500:'服务器发生未知错误，请联系管理员'
      }

      let errMessage='';

      if(err.response){
        errMessage=errCode[err.response.status];
      }else{
        if(err.message.indexOf('Network Error') !== -1){
          errMessage='网络错误，请重连网络试试~';
        }else if(err.message.indexOf('timeout') !== -1){
          errMessage='网络超时，请连上wifi重试~';
        }
      }
      return Promise.reject(errMessage || '发生未知错误，请联系管理员');
    }
  );
    let token= '';
    let id= '';

    const handleClick1 =()=>{
      axiosInstance({
        method:'POST',
        url:'/login',
        data:{
          username:'admin',
          password:'admin'
        },
        // headers:{
        // }
      })
      // .then(response=>{
      //   if(response.data.status === 0){
      //     token=response.data.date.token;
      //     message.success('登录成功');
      //   }else{
      //     message.error(response.data.msg);
      //   }
      // })
      .catch(err => {
        message.error(err);
      });
    };

    const handleClick2 =()=>{
      axiosInstance({
        method:'POST',
        url:'/category/add',
        data:{
          categoryName:'手机'
        },
        // headers:{
          
        // }
      })
      .then(response=>{
        if(response.data.status === 0){
          id=response.data.data._id;
          message.success('添加成功');
        }else{
          message.error(response.data.msg);
        }
      })
      .catch(err => {
        message.error(err);
      });
    };

    const handleClick3 =()=>{
      axiosInstance({
        method:'POST',
        url:'/category/delete',
        data:{
          categoryId:id
        },
        // headers:{
          
        // }
      })
      .then(response=>{
        if(response.data.status === 0){
          message.success('删除分类成功');
        }else{
          message.error(response.data.msg);
        }
      })
      .catch(err => {
        message.error('网络错误');
      });
    };


  

    return (
      <div>
        <button onClick={this.handleClick1}>按钮1</button>
        <button onClick={this.handleClick2}>按钮2</button>
        <button onClick={this.handleClick3}>按钮3</button>
      </div>
    )
  
}
