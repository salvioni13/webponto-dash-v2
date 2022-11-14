import { Link, Navigate, useOutlet } from "react-router-dom";
import { useProfile } from "../hooks";

export const ProtectedLayout = () => {
  const { userProfile } = useProfile();
  const outlet = useOutlet();

  if (!userProfile) {
    return <Navigate to="/" />;
  }

  return (
    <>
      {outlet}
    </>
  );
};
