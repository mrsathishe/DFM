import { INCREMENT } from '../actions/app.action';

const appIntialState = {
    count: 0
}

const app = (state= appIntialState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {
                ...state,
                count: action.payload.value
            }
        default:
            return state;
    }
}

export default app;