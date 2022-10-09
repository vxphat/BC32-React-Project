import React from "react";

const Cart = ({ isOpen, onClose, carts, onChangeQuantity }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <div className="cart">
      <div
        className="offcanvas offcanvas-end show fade d-block"
        tabIndex={-1}
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            CART
          </h5>
          <button
            type="button"
            className="btn-close"
            onClick={onClose}
            aria-label="Close"
          />
        </div>
        <div className="offcanvas-body">
          <table className="table">
            <thead>
              <tr>
                <th>#</th>
                <th>Product</th>
                <th>Image</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>
            <tbody>
              {carts.map((item, index) => (
                <tr key={item.id}>
                  <td>{index + 1}</td>
                  <td>{item.name}</td>
                  <td>
                    <img 
                    src={item.image} 
                    alt={item.alias} 
                    width="50px"
                    height="50px"
                    />
                  </td>
                  <td>{item.price}</td>
                  <td>
                    <button 
                    className="btn btn-minus"
                    onClick={()=> onChangeQuantity(item.id, -1)}
                    >-
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                    className="btn btn-add"
                    onClick={()=> onChangeQuantity(item.id, 1)}
                    >+</button>
                  </td>
                  <td>{item.price * item.quantity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="offcanvas-backdrop fade show"></div>
    </div>
  );
};

export default Cart;
