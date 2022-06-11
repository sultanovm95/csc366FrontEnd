import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';

import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

import { RoleOption } from '../../../components';
import axios from 'axios';

import { useFormik } from 'formik';
import * as Yup from 'yup';

function Copyright(props) {
    return (
        <Typography
            variant="body2"
            color="text.secondary"
            align="center"
            {...props}
        >
            {'CSC 309 | '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const makeSignUpCall = async (user) => {
    try {
        const response = await axios.post(
            'http://localhost:5000/users/signup',
            user
        );
        return response;
    } catch (err) {
        return err;
    }
};

const theme = createTheme();

export const Signup = () => {
    const [error, setError] = useState('');
    const [role, setRole] = useState('Client');

    function updateRole(value) {
        console.log('CB role ' + value);
        formik.values.role = value;
        setRole(value);
    }

    const formik = useFormik({
        initialValues: {
            firstName: '',
            lastName: '',
            email: '',
            role: role,
            password: '',
            password_confirm: ''
        },
        validationSchema: Yup.object({
            firstName: Yup.string()
                .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                .max(40)
                .required('First Name is required'),
            lastName: Yup.string()
                .matches(/^[A-Za-z ]*$/, 'Please enter valid name')
                .max(40)
                .required('Last Name is required'),
            email: Yup.string()
                .email('Must be a valid email')
                .min(5)
                .max(255)
                .required('Email is required'),
            password: Yup.string()
                .min(8)
                .max(12)
                .required('Password is required'),
            password_confirm: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .min(8)
                .max(12)
                .required('Confirmation is required')
        }),
        onSubmit: (values) => {
            console.log(values);
            makeSignUpCall(values).then((response) => {
                const status = response.status;
                const token = response.data.token;
                if (status === 201) {
                    axios.get('http://localhost:5000/users/account').then(result =>
                        {
                            if (result)
                            {
                                localStorage.setItem('AId', result.data)    
                                window.location = '/'
                            }                            
                        })
                } else {
                    setError('Invalid email | Maybe taken');
                }
            });
        }
    });

    return (
        <ThemeProvider theme={theme}>
            <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                    sx={{
                        marginTop: 8,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center'
                    }}
                >
                    <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                        <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                        Sign up
                    </Typography>
                    <Box component="form" noValidate sx={{ mt: 3 }}>
                        <Grid container spacing={2}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={Boolean(
                                        formik.touched.firstName &&
                                            formik.errors.firstName
                                    )}
                                    helperText={
                                        formik.touched.firstName &&
                                        formik.errors.firstName
                                    }
                                    value={formik.values.firstName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    autoComplete="given-name"
                                    name="firstName"
                                    required
                                    fullWidth
                                    id="firstName"
                                    label="First Name"
                                    autoFocus
                                />
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    error={Boolean(
                                        formik.touched.lastName &&
                                            formik.errors.lastName
                                    )}
                                    helperText={
                                        formik.touched.lastName &&
                                        formik.errors.lastName
                                    }
                                    value={formik.values.lastName}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    required
                                    fullWidth
                                    id="lastName"
                                    label="Last Name"
                                    name="lastName"
                                    autoComplete="family-name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={Boolean(
                                        formik.touched.email &&
                                            formik.errors.email
                                    )}
                                    helperText={
                                        formik.touched.email &&
                                        formik.errors.email
                                    }
                                    value={formik.values.email}
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    required
                                    fullWidth
                                    id="email"
                                    label="Email Address"
                                    name="email"
                                    autoComplete="email"
                                />
                            </Grid>
                            <Grid item xs={12}>
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
                                    required
                                    fullWidth
                                    name="password"
                                    label="Password"
                                    type="password"
                                    id="password"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    error={Boolean(
                                        formik.touched.passwordConfirmation &&
                                            formik.errors.passwordConfirmation
                                    )}
                                    helperText={
                                        formik.touched.passwordConfirmation &&
                                        formik.errors.passwordConfirmation
                                    }
                                    onBlur={formik.handleBlur}
                                    onChange={formik.handleChange}
                                    value={formik.values.passwordConfirmation}
                                    required
                                    fullWidth
                                    name="password_confirm"
                                    label="Password Confirmation"
                                    type="password"
                                    id="password_confirm"
                                    autoComplete="new-password"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <RoleOption
                                    updateRole={updateRole}
                                    value={'Sign up'}
                                />
                            </Grid>
                        </Grid>
                        <Button
                            disabled={!(formik.isValid && formik.dirty)}
                            onClick={formik.handleSubmit}
                            type="submit"
                            fullWidth
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                        >
                            Sign Up
                        </Button>
                        <Grid container justifyContent="flex-end">
                            <Grid item>
                                <Link href="/auth/login" variant="body2">
                                    Already have an account? Sign in
                                </Link>
                            </Grid>
                        </Grid>
                    </Box>
                </Box>
                <Typography
                    variant="body2"
                    style={{ color: 'red' }}
                    align="center"
                >
                    {error}
                </Typography>
                <Copyright sx={{ mt: 5 }} />
            </Container>
        </ThemeProvider>
    );
};
