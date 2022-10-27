import React from "react";

const MovieList = ({ dataItems }) => {
  return (
    <div>
      {dataItems.map((item, index) => {
        return (
          <table key={index}>
            <thead>
              <tr>
                <th>{item.hang}</th>
                <th>{item.danhSachGhe.soGhe}</th>
              </tr>
            </thead>
          </table>
        );
      })}
    </div>
  );
};

export default MovieList;
