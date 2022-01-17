import React, { useContext } from 'react'
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../../contexts/store'

function PrivateRoute({ children }) {
    const location = useLocation()
    const {state} = useContext(Context)
    console.log(state);
    const auth = state.userData.isVerified;
    return auth ? (
      children
    ) : (
      <Navigate
        to={{
          pathname: "/auth/login",
          search:`?next=${location.pathname}`
        }}
      />
    );
}

export default PrivateRoute
