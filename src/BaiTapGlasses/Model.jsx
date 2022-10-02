import React from "react";

const Model = ({ glass }) => {
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <img className="img-model" src="./img/model.png" alt="model" width="250px" />
          
        </div>
        <div className="col-6">
          <div className="glass-info">
            <h4 className="glass-name">
              {glass.name} - 
              <span className="glass-price"> {glass.price}$</span>
            </h4>
            <p className="desc">{glass.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Model;
