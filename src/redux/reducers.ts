import { combineReducers } from "redux";
import userSlicer from "./users/userSlicer";



export default combineReducers({
    Users: userSlicer
});
