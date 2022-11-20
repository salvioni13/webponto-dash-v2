import { useEffect } from "react";
import { Link, Navigate, useOutlet } from "react-router-dom";
import { useAppDispatch, useProfile } from "../hooks";
import { authentication } from "../redux/users/userSlicer";

export const ProtectedAdmin = () => {
  const { userProfile } = useProfile();
  const outlet = useOutlet();
  const dispatch = useAppDispatch();

  if (!userProfile) {
    return <Navigate to="/" />;
  }


  return (
    <>
      {outlet}
    </>
  );
};
