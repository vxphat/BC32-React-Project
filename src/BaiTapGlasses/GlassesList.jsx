import React from "react";

const GlassesList = ({ glassess, onSelect }) => {
  return (
    <div className="container text-center">
    <div className="row pb-5 mt-5">
      
      {glassess.map((glass) => {
        return (
            <div key={glass.id} className="col-lg-4 mb-3">
              <button className="btn">
                <img
                  className="img-glass"
                  src={glass.url}
                  alt={glass.name}
                  width="100px"
                  onClick={()=> onSelect(glass)}
                />
              </button>
            </div>   
        );
      })}
    </div>
    </div>
  );
};

export default GlassesList;
