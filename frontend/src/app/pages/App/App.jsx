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

export const App = (props) => {
    return (
        <Grid container spacing={2}>
            <Grid item xs={12}>
                <Item>
                    <SearchAppBar />
                </Item>
            </Grid>
            <Grid item xs={2} md={2} lg={2}>
                <Item>
                    <Sidebar user={props.user} />
                </Item>
            </Grid>
            <Grid item xs={9} md={9} lg={9}>
                <Item
                    style={{
                        marginTop: '50px',
                        padding: '0',
                        backgroundColor: '#edf6f9'
                    }}
                >
                    <Outlet />
                </Item>
            </Grid>
            <Grid item xs={1} md={1} lg={1}>
                <Item>
                    <Sidebar user={props.user} />
                </Item>
            </Grid>
        </Grid>
    );
};
