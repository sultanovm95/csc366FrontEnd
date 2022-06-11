import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { RoleOption } from '../../../components';

import { useFormik } from 'formik';
import * as Yup from 'yup';

import axios from 'axios';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                CSC 309
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const makeLoginCall = async (user) => {
    try {
        // props.setAIdByEmail(user.email) //add AID to user
        const response = await axios.post(
            "http://localhost:5000/users/login",
            user
        );
        return response;
    } catch (err) {
        return err;
    }
};

const theme = createTheme();

export const Login = (props) => {
    const [error, setError] = useState('');
    const [role, setRole] = useState('Client');

    function updateRole(value) {
        console.log('CB role ' + value);
        formik.values.role = value;
        setRole(value);
    }

    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            role: role
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('Must be a valid email')
                .min(5)
                .max(255)
                .required('Email is required'),
            password: Yup.string()
                .min(8)
                .max(12)
                .required('Password is required')
        }),
        onSubmit: (values) => {
            console.log(values);
            // makeLoginCall(props, values).then((response) => {
            //     const status = response.status;
            //     const token = response.data.token;
            //     if (status === 200) {
            //         localStorage.setItem('token', JSON.stringify(token));
            //         localStorage.setItem('email', values.email);
            //         window.location = '/'
            //     } else {
            //         setError('Invalid email | Maybe taken');
            //     }
            // });
            Promise.all([makeLoginCall(values), props.setAIdByEmail(values.email)]).then(([response, AId]) => 
                     { 
                        const status = response.status;
                        const token = response.data.token;
                        if (status === 200) {
                            localStorage.setItem('token', JSON.stringify(token));
                            localStorage.setItem('email', values.email);
                            window.location = '/'
                        } else {
                            setError('Invalid email | Maybe taken');
                        }

                     }
                     
                     )
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage:
                            'url(https://flevix.com/wp-content/uploads/2020/01/Web-Header-Background-1.svg)',
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light'
                                ? t.palette.grey[50]
                                : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center'
                    }}
                />
                <Grid
                    item
                    xs={12}
                    sm={8}
                    md={5}
                    component={Paper}
                    elevation={6}
                    square
                >
                    <Box
                        sx={{
                            my: 8,
                            mx: 4,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center'
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                            <LockOutlinedIcon />
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            Sign in
                        </Typography>
                        <Box
                            component="form"
                            noValidate
                            onSubmit={formik.handleSubmit}
                            sx={{ mt: 1 }}
                        >
                            <TextField
                                error={Boolean(
                                    formik.touched.email && formik.errors.email
                                )}
                                helperText={
                                    formik.touched.email && formik.errors.email
                                }
                                value={formik.values.email}
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                            />
                            <TextField
                                error={Boolean(
                                    formik.touched.password &&
                                        formik.errors.password
                                )}
                                helperText={
                                    formik.touched.password &&
                                    formik.errors.password
                                }
                                onBlur={formik.handleBlur}
                                onChange={formik.handleChange}
                                value={formik.values.password}
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                            <Grid xs={12}>
                                <RoleOption
                                    updateRole={updateRole}
                                    value={'Sign In'}
                                />
                            </Grid>
                            <Button
                                disabled={!(formik.isValid && formik.dirty)}
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Sign In
                            </Button>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="success"
                                onClick={() => {
                                    window.location = '/';
                                }}
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Continue As Guest
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    <Link href="#" variant="body2">
                                        Forgot password?
                                    </Link>
                                </Grid>
                                <Grid item>
                                    <Link href="/auth/signup" variant="body2">
                                        {"Don't have an account? Sign Up"}
                                    </Link>
                                </Grid>
                            </Grid>
                            <Copyright sx={{ mt: 5 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </ThemeProvider>
    );
};
