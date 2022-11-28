import { combineReducers } from "redux";
import layout from "./layout/layoutSlicer";
import userSlicer from "./users/userSlicer";



export default combineReducers({
    Users: userSlicer,
    Layout: layout
});
