import { Box, Container, Grid, Typography } from '@mui/material';
import {
    AccountProfile,
    AccountProfileDetails,
    SettingsNotifications,
    SettingsPassword
} from '../../../components';

export const Account = () => (
    <>
        <Box
            component="main"
            sx={{
                backgroundColor: '#edf6f9',
                padding: '0'
            }}
        >
            <Container maxWidth="lg">
                <Typography sx={{ mb: 3, color: 'black' }} variant="h4">
                    Account
                </Typography>
                <Grid container spacing={3}>
                    <Grid item lg={6} md={6} xs={12}>
                        <AccountProfile />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <AccountProfileDetails />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <SettingsNotifications />
                    </Grid>
                    <Grid item lg={6} md={6} xs={12}>
                        <SettingsPassword />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);
