import React from 'react'
import { Outlet } from 'react-router'

const BlankRoute = () => {
  return (
    <div>
        <Outlet/>
    </div>
  )
}

export default BlankRoute