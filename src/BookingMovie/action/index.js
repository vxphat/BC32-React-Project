import { CREATE_USERSELECT } from "../constants/userContant";
import { CHOOSE_SEAT} from '../constants/ticketContant';

export const createUserSelect = (userSelect) =>{
    return { type: CREATE_USERSELECT, payload: userSelect};
}

export const chooseSeat = (seatSelected)=>{
    return { type: CHOOSE_SEAT, payload: {seatSelected}};
}

