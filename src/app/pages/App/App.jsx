import { Sidebar, SearchAppBar } from '../../../components';
import { Outlet } from 'react-router-dom';

import Grid from '@mui/material/Grid';
import { styled } from '@mui/material/styles';

const Item = styled(Grid)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    color: theme.palette.text.secondary
}));

export const App = () => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item>
                    <SearchAppBar />
                </Item>
            </Grid>
            <Grid item xs={2} md={1} lg={1}>
                <Item>
                    <Sidebar />
                </Item>
            </Grid>
            <Grid item xs={10} md={11} lg={11}>
                <Item style={{ marginTop: '50px', padding: '0' }}>
                    <Outlet />
                </Item>
            </Grid>
        </Grid>
    );
};
