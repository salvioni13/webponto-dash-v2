import { combineReducers } from "redux";
import layoutSlicer from "./layout/layoutSlicer";
import userSlicer from "./users/userSlicer";



export default combineReducers({
    Users: userSlicer,
    Layout: layoutSlicer
});
