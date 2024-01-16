import React, { useState } from 'react'
import { useAuth } from '../context/auth'
const Homepage = () => {
  const [auth,setAuth] = useAuth();
  return (
    <>
      Homepage
      <pre>{JSON.stringify(auth,null,4)}</pre>
    </>
  )
}

export default Homepage
