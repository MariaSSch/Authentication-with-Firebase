const initialState = {
    email: null,
    id: null,
    token: null,
}

const GET_IN = "GET_IN";
const GET_OUT = "GET_OUT";

export const userReducer = (state=initialState, action) =>{
    if (action.type === GET_IN) {
        return {...state,
                email: action.email,
                id: action.id,
                token: action.token,
            }
    } else if (action.type === GET_OUT) {
        return {...state,
            email: null,
            id: null,
            token: null,
        }
    } return state;
}

export const user_get_in = (email, id, token) => ({type: "GET_IN", email, id, token})
export const user_get_out = () => ({type: "GET_OUT"});