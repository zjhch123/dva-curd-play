import React from 'react'
import { connect } from 'dva'
const Login = ({ dispatch, history, user }) => {
  return (
    <div>
      <button 
        type="button"
        onClick={() => {
          dispatch({type: 'user/login'});
          history.push('/');
        }}>
        Login
      </button>
    </div>
  )
}

export default connect((state) => ({user: state.user}))(Login)