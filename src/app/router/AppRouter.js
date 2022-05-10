import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, App, Account, UserProfiles } from '../pages';

function Home() {
    return <h1>Dashboard</h1>;
}

function Survey() {
    return <h1>Take A Survey</h1>;
}

function History(req, res) {
    return <h1>History</h1>;
}

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Home />} />
                    <Route path="survey" element={<Survey />} />
                    <Route path="profile" element={<Account />} />
                    <Route path="history" element={<UserProfiles />} />
                </Route>
                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
