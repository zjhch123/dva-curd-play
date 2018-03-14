import React from 'react'
import { connect } from 'dva'
import { Route, Link, Redirect } from 'dva/router'
import { LoginComponent } from '../../components/'
const AuthorizedLayout =  ({ match, isLogin, history }) => {
  if (isLogin) {
    return <Redirect to='/' />
  }
  return (
    <div>
      <h1>403 Unauthorized</h1>
      <h2>Please <Link to={`${match.url}/login`}>login</Link>.</h2>
      <div>
        <Route path={`${match.url}/login`} component={LoginComponent}/>
      </div>
    </div>
  )
}

export default connect((state) => ({ isLogin: state.user.isLogin }))(AuthorizedLayout)