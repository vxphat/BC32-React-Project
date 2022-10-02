import React from "react";

const TestGlasses = ({ glass }) => {
  if (!glass) {
    return null;
  }

  return (
    <div>
      <img
        className="img-test"
        src={glass.url}
        alt={glass.name}
        width="140px"
      />

      <div className="glass-info">
        <h5 className="mb-0">{glass.name}</h5>
        <p className="glass-desc">{glass.desc}</p>
        
        <div className="glass-color mt-2">
          <ul className="list-color p-0">
            <li className="nude style"></li>
            <li className="blue style"></li>
            <li className="yellow style"></li>
            <li className="red style"></li>
          </ul>
        </div>

        <h5 className="glass-price">${glass.price}</h5>

        <div className="glass-size">
          <p>Size</p>
          <p className="style style-size">L</p>
          <p className="style style-size">M</p>
          <p className="style style-size">S</p>
        </div>

        <div className="glass-promo mt-2">
          <p className="mb-0">Promotion:</p>
          <ul>
            <li>Buy One get One Free</li>
            <li>30% off entire Order</li>
          </ul>
        </div>
        <div className="text-center">
          <button className="btn btn-cart">Add To Cart</button>
        </div>
      </div>
    </div>
  );
};

export default TestGlasses;
