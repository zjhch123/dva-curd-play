import React from 'react'
import { connect } from 'dva'
import { Route, Redirect, withRouter } from 'dva/router'

class AuthorizedRoute extends React.Component {
  render() {
    const {
      isLogin,
      isPending,
      component: Component,
      ...rest
    } = this.props

    return (
      <Route {...rest} 
        render={(props) => {
          if (isPending) return <div>Loading...</div>
          return isLogin 
                      ? <Component {...this.props}/>
                      : <Redirect to="/auth"/>
        }}
      />
    )
  }
}

const mapStateToProps = (state) => ({
  isPending: state.user.isPending, 
  isLogin: state.user.isLogin
})

export default withRouter(connect(mapStateToProps)(AuthorizedRoute))