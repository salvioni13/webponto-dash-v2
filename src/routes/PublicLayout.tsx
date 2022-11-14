import { Navigate, useOutlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useProfile } from "../hooks";


export const PublicLayout = () => {
    const { userProfile } = useProfile();
    const outlet = useOutlet();
    const navigate = useNavigate();

    if (userProfile) {
        return <Navigate to="/dashboard" replace />;
    }

    const navTo = (path: string) => {
        if (path) {
            navigate(path);
        }
    };

    return (
        <>
            {outlet}

        </>
    );
};
