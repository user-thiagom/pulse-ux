import React from 'react'
import { Outlet } from "react-router-dom";
import BottomNavigation from '../../navigation/BottomNavigation/BottomNavigation';

const MainLayout = () => {
    return (
        <div>

            <Outlet />

            <BottomNavigation />

        </div>
    )
}

export default MainLayout