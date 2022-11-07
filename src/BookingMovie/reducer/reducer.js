import { combineReducers } from "redux";
import ticketReducer from "./ticketReducer";
import userReducer from "./userReducer";

const reducer = combineReducers({
    ticket: ticketReducer,
    userSelect: userReducer,
});

export default reducer;