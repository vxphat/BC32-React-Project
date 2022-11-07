import {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import cn from 'classnames'
import { chooseSeat } from '../action';

const SeatItem = ({ number, isSeat, seatInfo }) => {
  const [isSelected, setIsSelected] = useState(false);
  const {numberOfSeat} = useSelector((state)=> state.userSelect);
  const {seats} = useSelector((state)=> state.ticket);
  const dispatch = useDispatch();


  const handleSelect = () => {
    if(!numberOfSeat){
      alert('Vui lòng điền tên và số ghế');
      return;
    }else if(seatInfo.daDat){
      alert('Ghế này đã có người đặt');
      return;
    }

    if(seats.length > 0 && seats.length === numberOfSeat){
      const index = seats.findIndex((item)=> item.soGhe === seatInfo.soGhe);

      if (index !== -1){
        //Nếu index tồn tại => cập nhật lại local state và dispatch lên action
        setIsSelected(!isSelected);
        dispatch(chooseSeat(seatInfo));
        return;

      }else{
        alert(`Không được chọn hơn ${numberOfSeat} ghế!`);
        return;
      }
    }

    //Cập nhật lại local
    setIsSelected(!isSelected);
      dispatch(chooseSeat(seatInfo));
  }

  useEffect(() => {
    if (!seats.length && isSelected) {
       setIsSelected(!isSelected);
    }
 }, [seats]);

  return (
    <div
    className={cn(
        {seat: isSeat},
        {colNumber: !isSeat},
        {selected: seatInfo.daDat},
        {active: isSelected},
    )}
    onClick={handleSelect}
    >
        {number}
    </div>
  )
}

export default SeatItem