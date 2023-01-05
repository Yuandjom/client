import React from 'react'
import { useState } from 'react'
import { Box, useMediaQuery } from '@mui/material'
import {useSelector} from 'react-router-dom'
import { Outlet } from 'react-router-dom'
import Navbar from 'components/Navbar'
import Sidebar from 'components/Sidebar'
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
  const isNonMobile = useMediaQuery('(min-width: 600px)')
  const [isSidebarOpen, setIsSidebarOpen] = useState(true)
  return (
    <Box display={isNonMobile ? 'flex': 'block'} width= "100%" height="100%">
      <Sidebar 
        isNonMobile = {isNonMobile}
        drawerWidth = "250px"
        isSidebarOpen = {isSidebarOpen}
        setIsSidebarOpen = {setIsSidebarOpen}
      />
        <Box>
            <Navbar 
                isSidebarOpen = {isSidebarOpen}
                setIsSidebarOpen = {setIsSidebarOpen}
            />
            <Outlet />
        </Box>
    </Box>
  )
}

export default Layout