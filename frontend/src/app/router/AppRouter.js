import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, App, Account, Profiles, Posts } from '../pages';
import { Jobs } from '../pages/Jobs';
import { getUser } from '../../utils';
import { useState, useEffect } from 'react';

const getUserData = async () => {
    const user = await getUser();
    return user;
};

export const AppRouter = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        getUserData().then((userData) => {
            setUser(userData);
        });
    }, []);

    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App user={user} />}>
                    <Route index element={<Posts user={user} />} />
                    <Route path="account" element={<Account user={user} />} />
                    <Route path="profiles" element={<Profiles user={user} />} />
                    <Route path="jobs" element={<Jobs user={user}/>} />
                </Route>

                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
