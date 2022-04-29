import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Login, Signup } from '../pages';

export const AppRouter = () => {
    return (
        <Router>
            <Routes>
                <Route path="/auth">
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </Router>
    );
};
