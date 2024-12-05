import React from 'react'
import { Outlet } from 'react-router'
import NavBar from './components/NavBar.jsx'

function Layout() {
    return (
        <div>
            {/* Nav Bar  */}
            
            <NavBar/>

            {/* --------- End NavBar  */}


            <Outlet />
        </div>
    )
}


export default Layout