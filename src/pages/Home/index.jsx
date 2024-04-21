import React from 'react'
import { Outlet } from 'react-router-dom'
import AppBar from '../../components/AppBar'
const index = () => {
  return (
    <>
    <AppBar/>
    <Outlet/>
    </>
  )
}

export default index