import { CREATE_USERSELECT } from '../constants/userContant';

const initialState = {
    userName: "",
    numberOfSeat: 0,
};

const userReducer = (state = initialState, action)=>{
    switch(action.type){
        case CREATE_USERSELECT:
            const { userName, numberOfSeat} = action.payload;

            return {...state, userName, numberOfSeat};

        default:
            return state;
    }
};

export default userReducer;