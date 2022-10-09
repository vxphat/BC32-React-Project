import React from "react";

const ProductDetails = ({ isOpen, onClose, product }) => {
  if (!isOpen) {
    return null;
  }

  return (
    <>
      <div
        className="modal fade show d-block modal-details"
        tabIndex={-1}
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="exampleModalLabel">
                Details
              </h1>
              <button
                type="button"
                className="btn-close"
                onClick={onClose}
                aria-label="Close"
              />
            </div>
            <div className="modal-body">
              <div className="row">
                <div className="col-sm-6">
                  <img
                    src={product.image}
                    alt={product.alias}
                    style={{ width: "300px", height: "300px" }}
                  />
                </div>
                <div className="col-sm-6">
                  <table className="table">
                    <tbody>
                      <tr>
                        <td>Name</td>
                        <td>{product.name}</td>
                      </tr>
                      <tr>
                        <td>Price</td>
                        <td>{product.price}$</td>
                      </tr>
                      <tr>
                        <td>Quantity</td>
                        <td>{product.quantity}</td>
                      </tr>
                      <tr>
                        <td>Description</td>
                        <td>{product.description}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                onClick={onClose}
              >
                Close
              </button>
              {/* <button type="button" className="btn btn-primary">
                Save changes
              </button> */}
            </div>
          </div>
        </div>
      </div>
      {/* Overlay */}
      <div class="modal-backdrop fade show"></div>
    </>
  );
};

export default ProductDetails;
