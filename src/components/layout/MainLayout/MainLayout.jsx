import React from 'react'
import { Outlet } from "react-router-dom";
import BottomNavigation from '../../navigation/BottomNavigation/BottomNavigation';
import DesktopNavigation from '../../navigation/DesktopNavigation/DesktopNavigation';

const MainLayout = () => {
    return (
        <div>

            <DesktopNavigation />

            <Outlet />

            <BottomNavigation />

        </div>
    )
}

export default MainLayout