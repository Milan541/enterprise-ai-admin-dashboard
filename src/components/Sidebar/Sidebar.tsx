import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";

import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { DRAWER_WIDTH } from "@/constants/layout";

const menuItems = [
    "Dashboard",
    "Users",
    "Departments",
    "Reports",
    "AI Assistant",
    "Settings",
];

export default function Sidebar() {
    return (
        <Drawer
            variant="permanent"
            sx={{
                width: DRAWER_WIDTH,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: DRAWER_WIDTH,
                    boxSizing: 'border-box',
                }
            }}
        >
            <Toolbar />

            <List>
                {menuItems?.map((item) => (
                    <ListItem key={item} disablePadding>
                        <ListItemButton>
                            <ListItemText primary={item} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}