import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Login, Signup, App, Account, Profiles, Posts } from '../pages';
import { Jobs } from '../pages/Jobs';
import { CreateProfiles } from '../pages/CreateProfiles';
import { DesiredProfiles } from '../pages/DesiredProfile';

export const AppRouter = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />}>
                    <Route index element={<Posts />} />
                    <Route path="account" element={<Account />} />
                    <Route path="profiles" element={<Profiles />} />
                    <Route path="jobs" element={<Jobs />} />
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
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
};
