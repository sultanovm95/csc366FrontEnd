import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, App, Account, UserProfiles } from '../pages';
import { getUser } from '../../utils';
import { useState, useEffect } from 'react';

const getUserData = async () => {
    const user = await getUser();
    return user;
};

function Home(props) {
    const user = props.user;
    let firstName = null;
    if (user) {
        firstName = user.firstName;
    }
    return (
        <>
            <h1>Welcome {firstName}</h1>
        </>
    );
}

function Survey(props) {
    return <h1>Hello</h1>;
}

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
                    <Route index element={<Home user={user} />} />
                    <Route path="survey" element={<Survey user={user} />} />
                    <Route path="profile" element={<Account user={user} />} />
                    <Route
                        path="history"
                        element={<UserProfiles user={user} />}
                    />
                </Route>
                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
