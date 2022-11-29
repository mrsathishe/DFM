import { combineReducers } from "@reduxjs/toolkit";
import app from "./app";
import user from "./user";

export default combineReducers({
    app,
    user,
});