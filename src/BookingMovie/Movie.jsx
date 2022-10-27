import React from "react";
import "./style.css";
import data from "./danhSachGhe.json";
import MovieList from "./MovieList";

const Movie = () => {
  return (
    <div>
      <div className="display">
        <div className="overlay"></div>
        <div className="container">
          <div className="row">
            <div className="col-7">
              <div className="title">
                <h1>ĐẶT VÉ XEM PHIM ONLINE</h1>
                <p className="screen">Màn hình</p>
              </div>
              <MovieList dataItems={data} />
            </div>
            
            <div className="col-5">
              <div className="title">
                <h1>DANH SÁCH GHẾ BẠN CHỌN</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Movie;
