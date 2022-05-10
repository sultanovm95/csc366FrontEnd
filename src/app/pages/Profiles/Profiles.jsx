import { Box, Container, Grid, Typography } from '@mui/material';
import { CustomerListResults } from '../../../components';
import { customers } from '../../mocks/customers';

export const UserProfiles = () => (
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
                    User Profiles
                </Typography>
                <Grid container spacing={3}>
                    <Grid item lg={12} md={12} xs={12}>
                        <CustomerListResults customers={customers} />
                    </Grid>
                </Grid>
            </Container>
        </Box>
    </>
);
