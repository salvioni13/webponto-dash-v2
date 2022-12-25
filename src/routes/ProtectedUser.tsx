import { useEffect } from "react";
import { Link, Navigate, useNavigate, useOutlet } from "react-router-dom";
import { useAppDispatch, useAppSelector, usePermission, useProfile } from "../hooks";


export const ProtectedUser = () => {
  const { userProfile } = useProfile();
  const outlet = useOutlet();
  const permission = usePermission();
  const navigate = useNavigate();
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
    }else{
      navTo("/")
    }
  },[loggedUser])

  return (
    <>
      {outlet}
    </>
  );
};
