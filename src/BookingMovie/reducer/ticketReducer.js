import { CHOOSE_SEAT } from "../constants/ticketContant";

const initialState = {
    seats: [],
}

const ticketReducer =(state = initialState, action) =>{
    switch (action.type){

        case CHOOSE_SEAT:
            const { seatSelected} = action.payload;

            const index = state.seats.findIndex((item)=> item.soGhe === seatSelected.soGhe);

            if (index !== -1){
                const newSeats = [...state.seats];
                newSeats.splice(index, 1);
                return {...state, seats: newSeats};
            }
            //đổi trạng thái ghế
            const newSeatSelected = {...seatSelected, daDat: !seatSelected.daDat,};

            return {...state, seats: [...state.seats, newSeatSelected]};



        default:
            return state;
    }
}

export default ticketReducer;