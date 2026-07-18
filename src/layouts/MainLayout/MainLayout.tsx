import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

import { Outlet } from 'react-router-dom'

import Header from '@/components/Header';
import Sidebar from '@/components/Sidebar';

function MainLayout() {
    return (
        <Box sx={{ display: 'flex' }}>
            <Header />

            <Sidebar />

            <Box
                component='main'
                sx={{
                    flexGrow: 1,
                    p: 3,
                }}
            >
                <Toolbar />
                <Outlet />
            </Box>
        </Box>
    )
}

export default MainLayout;