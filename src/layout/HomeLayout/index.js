import React from 'react'
import { connect } from 'dva'


const HomeLayout = ({dispatch}) => (
  <div>
    Home
    <button
      type="button"
      onClick={() => {
        dispatch({ type: 'user/logout' });
      }}
    >Logout</button>
  </div>
)

export default connect()(HomeLayout)