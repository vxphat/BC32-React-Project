import React from "react";

const ProductList = ({ products, onShowDetail, onAddToCart }) => {
  return (
    <div className="container py-5" id="product">
      <div className="row">
        {products.map((product) => {
          return (
            <div key={product.id} className="col-sm-4 mb-3 ">
              <div className="card item">
                <img
                  className="card-img"
                  src={product.image}
                  alt={product.alias}
                  style={{ width: "200px", height: "200px" }}
                />

                <div className="card-body">
                  <h6 className="card-title">
                    {product.name}</h6>
                  <h6 className="card-price">
                    {product.price}$</h6>
                  <p className="card-desc">
                    {product.shortDescription}
                  </p>
                  <div className="card-btn mt-3">
                    <button 
                    className="btn btn-dark me-2"
                    onClick={()=>onShowDetail(product)}
                    >
                    
                        Details</button>
                    <button 
                    className="btn btn-primary"
                    onClick={()=>onAddToCart(product)}
                    >
                        
                        Add To Cart</button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
