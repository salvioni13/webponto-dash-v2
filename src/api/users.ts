import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

const getUsers = (params: any) => {
  return api.get(`${url.GET_PROJECTS}/${params?.project}${url.GET_USERS}`);
};

const changeStatus = (params:any) => {
  return api.patch(`${url.GET_USERS}${url.CHANGE_STATUS}/${params?.project}`, {
    "status": params?.status
}); 
}

const updateUserPhone = (params: any) => {
  return api.update(`${url.GET_USERS}`,
    params?.data
  )
}

const getMe = (params: any) => { 
  return api.get(`${url.GET_USERS}/me`)
}

const getUser = () =>{
  return api.get(`${url.GET_USERS}/me`)
}

export { 
  getUsers,
  changeStatus,
  updateUserPhone,
  getMe,
  getUser
 };
