import { useEffect, useLayoutEffect } from "react";
import { Link, Navigate, useNavigate, useOutlet } from "react-router-dom";
import { useAppSelector } from "../app/hooks";
import { useAppDispatch, usePermission, useProfile } from "../hooks";
import { authentication } from "../redux/users/userSlicer";

export const ProtectedAdmin = () => {
  const { userProfile } = useProfile();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const permission = usePermission();
  const dispatch = useAppDispatch();
  const {loggedUser} = useAppSelector((state)=>({loggedUser: state.Users.loggedUser})) 

  const navTo = (path: string) => {
    if (path) {
      navigate(path);
    }
  };
  
  useEffect(()=>{
    if(loggedUser && loggedUser !== undefined){
      if(permission.admin){
        navTo("/admin")
      }else if(permission.user){
        navTo("/user")
      }else{
        navTo("/")
      }
    }
  },[loggedUser])


  return (
    <>
      {outlet}
    </>
  );
};
