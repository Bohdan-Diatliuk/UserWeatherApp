import { Routes, Route } from "react-router-dom";
import { UserListPage } from "../pages/UserListPage/UserListPage";
import { UserDetails } from "../pages/UserDetailsPage/UserDetailsPage";

export const AppRouter: React.FC = () => {
    return (
        <Routes>
            <Route path="/" element={<UserListPage />} />
            <Route path="/user/:id" element={<UserDetails />} />
        </Routes>
    )
};