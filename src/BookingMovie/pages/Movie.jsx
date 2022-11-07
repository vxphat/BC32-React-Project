import React from "react";
import "../assets/style.scss";
import data from "../data/danhSachGhe.json";
import Management from "./Management";
import TicketInfo from "./TicketInfo";
import UserInfo from "./UserInfo";

const Movie = () => {
  return (
    <div>
      <h1 className="text-center my-3">ĐẶT VÉ PHIM ONLINE</h1>
      <section className="ticket">
        <UserInfo />
        <Management seats={data}/>
        <TicketInfo />


      </section>
    </div>
  );
};

export default Movie;
