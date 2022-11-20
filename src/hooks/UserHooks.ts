import { useState, useEffect, useMemo } from "react";

// hooks
import { useRedux } from "../hooks/index";

// api
import { getLoggedUser } from "../api/apiCore";


const useProfile = () => {
  // global store

  const userProfileSession = getLoggedUser();
  const [loading] = useState(userProfileSession ? false : true);
  const [userProfile, setUserProfile] = useState(
    userProfileSession ? { ...userProfileSession } : null
  );
  useEffect(() => {
    const userProfileSession = getLoggedUser();
    setUserProfile(
      userProfileSession ? { ...userProfileSession } : null
    );
  }, []);

  return { userProfile, loading };
};


const usePermission = () => {
  const { useAppSelector } = useRedux();
  const { loggedUser } = useAppSelector((state) => ({
    loggedUser: state.Users.loggedUser
  }));

    
    const result = useMemo(
      () => ({
        admin: Boolean(loggedUser?.permission?.id === 1),
        user: Boolean(loggedUser?.permission?.id !== 1 && loggedUser?.permission !== undefined)
      }),
      [loggedUser]
    );
  
    return result;
    
  

}
export { useProfile, usePermission };
