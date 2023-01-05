import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import {useSelector} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'

//Note that outlet will render the child from the App.js
/**
 *  <Route element={<Layout />}>
      <Route path="/" element={<Navigate to="/dashboard" replace />} />  (Outlet will render here)
      <Route path="/dashboard" element={<Dashboard />} />
    </Route>
 * 
 * 
 */
const Layout = () => {
  return (
    <Box width= "100%" height="100%">
        <Box>
            <Navbar />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout