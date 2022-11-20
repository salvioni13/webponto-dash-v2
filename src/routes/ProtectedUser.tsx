import { Link, Navigate, useOutlet } from "react-router-dom";
import { useProfile } from "../hooks";

export const ProtectedUser = () => {
  const { userProfile } = useProfile();
  const outlet = useOutlet();

  if (!userProfile) {
    return <Navigate to="/" />;
  }else{
    
  }

  return (
    <>
      {outlet}
    </>
  );
};
