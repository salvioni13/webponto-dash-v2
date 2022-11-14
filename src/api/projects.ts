import { APIClient } from "./apiCore";
import * as url from "./urls";

const api = new APIClient();

const getProjects = () => {
  return api.get(url.GET_PROJECTS);
};

const acceptProjectInvite = (params: any) => {
  return api.create(`${url.ACCEPT_INVITE}`, {
    token: params?.token, 
    invite_id: params?.invite_id
  })
}

export { getProjects, acceptProjectInvite };
