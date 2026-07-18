import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import NotificationIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { DRAWER_WIDTH } from '@/constants/layout';

export default function Header() {
    return (
        <AppBar
            position='fixed'
            sx={{
                width: `calc(100% - ${DRAWER_WIDTH}px)`,
                ml: `${DRAWER_WIDTH}px`,
            }}
        >
            <Toolbar>
                <Typography variant='h6'>
                    EnterPrise AI Dashboard
                </Typography>

                <Box sx={{ flexGrow: 1 }} />

                <IconButton color='inherit'>
                    <NotificationIcon />
                </IconButton>

                <IconButton color='inherit'>
                    <AccountCircleIcon />
                </IconButton>
            </Toolbar>

        </AppBar>
    )
}