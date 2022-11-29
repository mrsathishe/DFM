import { LOGIN } from "../utils/constant";


export const loginAction = (userLoginData) => ({
    type: LOGIN,
    payload: userLoginData
});


export const onLogin = (userLoginData, callback) => async dispatch => {
    await dispatch(loginAction(userLoginData));
    if(callback){
        callback();
    }
}