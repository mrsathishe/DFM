import { LOGIN } from "../utils/constant";

const userIntialState = {
    
}

const user = (state= userIntialState, action) => {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                ...action.payload,
            }
        default:
            return state;
    }
}

export default user;