import React,{Component} from 'react';
import {connect} from 'react-redux';
import {Redirect} from 'react-router-dom';



export default function withCheckLogin(WrappedComponent){

@connect(
  (state) =>({user:state.user}),
  null
)
  class CheckLogin extends Component{

    static displayName= `checkLogin(${WrappedComponent.displayName || WrappedComponent.name || 'component'})`;
    render(){

      const {
        user:{token},
        location:{pathname}
      } =this.props;

      if(token){
        if(pathname === '/login'){
          return <Redirect to="/"/>;
        }
      }else{
        if(pathname === '/'){
          return <Redirect to="/login"/>;
        }
      }
      return <WrappedComponent {...this.props}/>;
    }
  };
  return CheckLogin;
}

  
