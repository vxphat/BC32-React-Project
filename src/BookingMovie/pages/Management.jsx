import React from "react";
import SeatItem from "./SeatItem";

const Management = ({ seats }) => {
  return (
    <>
      <div className="seatChoice">
        <div className="seatType">
          <span className="seatSelected">Ghế đã đặt</span>
          <span className="seatReserved">Ghế đang chọn</span>
          <span className="seatEmpty">Ghế trống</span>
        </div>
        <div className="seatList">
          <div className="screen"> SCREEN</div>
          <div className="wrapper">
            {seats.map((line, index)=>(
              <div key={index} className="seatLine">
                <div className="lineHang">{line.hang}</div>
                {line.danhSachGhe.map((seat, indexSeat)=>(
                  <SeatItem 
                  key={seat.soGhe}
                  number={indexSeat + 1}
                  seatInfo={seat}
                  isSeat={line.hang}
                  
                  />
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Management;
