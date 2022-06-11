import { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, App, Account, Profiles, Posts } from '../pages';
import { Jobs, JobsBackUp } from '../pages/Jobs';
import { CreateProfiles } from '../pages/CreateProfiles';
import { DesiredProfiles } from '../pages/DesiredProfile';



export const AppRouter = () => {
    async function setAccountIdByEmail(email){
        axios.get("http://localhost:5000/users/account?email=" + email).then(
            result => {
                console.log(email)
                localStorage.setItem('AId', result.data)    
                return result.data
            })
    }

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Posts />} />
                    <Route path="account" element={<Account/>} />
                    <Route path="profiles" element={<Profiles/>} />
                    <Route path="jobs" element={<JobsBackUp/>} />
                    <Route
                        path="create_profiles"
                        element={<CreateProfiles />}
                    />
                    <Route
                        path="profiles/:id"
                        element={<DesiredProfiles />}
                    />
                </Route>
                <Route path="/auth">
                    <Route path="login" element={<Login setAIdByEmail={setAccountIdByEmail}/>} />
                    <Route path="signup" element={<Signup setAIdByEmail={setAccountIdByEmail} />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
