import { useEffect, useLayoutEffect } from "react";
import { Navigate, useOutlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../hooks";
import { usePermission, useProfile } from "../hooks";
import { authentication } from "../redux/users/userSlicer";


export const PublicLayout = () => {
  const { userProfile } = useProfile();
  const outlet = useOutlet();
  const navigate = useNavigate();
  const permission = usePermission();
  const dispatch = useAppDispatch();
  const {loggedUser} = useAppSelector((state)=>({loggedUser: state.Users.loggedUser})) 
  
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
