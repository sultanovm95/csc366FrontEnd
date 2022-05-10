import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import LoginIcon from '@mui/icons-material/Login';
import List from '@mui/material/List';

import ListItemIcon from '@mui/material/ListItemIcon';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import NoteAddOutlinedIcon from '@mui/icons-material/NoteAddOutlined';
import HistoryOutlinedIcon from '@mui/icons-material/HistoryOutlined';
import WhatshotOutlinedIcon from '@mui/icons-material/WhatshotOutlined';
import TrendingUpOutlinedIcon from '@mui/icons-material/TrendingUpOutlined';

import Avatar from '@mui/material/Avatar';
import Badge from '@mui/material/Badge';

import Divider from '@mui/material/Divider';

import { Link } from 'react-router-dom';

const DrawerHeader = styled('div')(() => ({
    minHeight: 60
}));

const centerAlign = {
    display: 'block',
    margin: 'auto',
    padding: '10'
};

const bottomAlign = {
    display: 'block',
    position: 'fixed',
    bottom: '0',
    padding: '10'
};

const StyledBadge = styled(Badge)(({ theme }) => ({
    '& .MuiBadge-badge': {
        backgroundColor: '#44b700',
        color: '#44b700',
        boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
        '&::after': {
            width: '100%',
            height: '100%',
            borderRadius: '50%',
            animation: 'ripple 1.2s infinite ease-in-out',
            border: '1px solid currentColor',
            content: '""'
        }
    },
    '@keyframes ripple': {
        '0%': {
            transform: 'scale(.8)',
            opacity: 1
        },
        '100%': {
            transform: 'scale(2.4)',
            opacity: 0
        }
    }
}));

const Drawer = styled(MuiDrawer)(({ theme, open }) => ({}));

export const Sidebar = () => {
    return (
        <Box sx={{ flexGrow: 1 }} position="relative">
            <Drawer variant="permanent">
                <DrawerHeader></DrawerHeader>
                <List>
                    <ListItem button>
                        <Link to="/">
                            <ListItemIcon>
                                <HomeOutlinedIcon
                                    color="primary"
                                    style={centerAlign}
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Link to="/survey">
                            <ListItemIcon>
                                <NoteAddOutlinedIcon
                                    color="primary"
                                    style={centerAlign}
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/history">
                            <ListItemIcon>
                                <HistoryOutlinedIcon
                                    color="primary"
                                    style={centerAlign}
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                </List>
                <List style={bottomAlign}>
                    <ListItem button>
                        <Link to="/profile">
                            <ListItemIcon>
                                <StyledBadge
                                    style={centerAlign}
                                    overlap="circular"
                                    anchorOrigin={{
                                        vertical: 'bottom',
                                        horizontal: 'right'
                                    }}
                                    variant="dot"
                                >
                                    <Avatar
                                        alt="Remy Sharp"
                                        src="https://mui.com/static/images/avatar/1.jpg"
                                    />
                                </StyledBadge>
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/auth/login">
                            <ListItemIcon>
                                <LogoutOutlinedIcon
                                    color="secondary"
                                    style={centerAlign}
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                    <ListItem button>
                        <Link to="/auth/login">
                            <ListItemIcon>
                                <LoginIcon
                                    color="primary"
                                    style={centerAlign}
                                />
                            </ListItemIcon>
                        </Link>
                    </ListItem>
                </List>
            </Drawer>
        </Box>
    );
};
