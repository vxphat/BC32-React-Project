import React, { Component } from "react";
import Cart from "./Cart";
import data from "./dataJSON.json";
import ProductDetails from "./ProductDetails";
import ProductList from "./ProductList";
import "./style.css";

export default class ShoeShop extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedProduct: null,

      //state quản lý ẩn hiện modal và canvas
      isOpenModal: false,
      isOpenCanvas: false,

      //state lưu trữ danh sách các sản phẩm trong giỏ hàng
      carts: [],
      total: null,
    };
  }

  //Hàm ẩn hiện modal
  handleToggleModal = (product) => {
    //Thay đổi giá trị của state isOpen thành phủ định của chính nó
    this.setState((state) => ({ isOpenModal: !state.isOpenModal }));
    this.setState({ selectedProduct: product });
  };

  //Hàm ẩn hiện Offcanvas
  handleToggleCanvas = () => {
    this.setState((state) => ({ isOpenCanvas: !state.isOpenCanvas }));
  };

  //Hàm thêm vào giỏ hàng
  handleAddToCart = (product) => {
    //Kiểm tra sản phẩm đã tồn tại chưa?
    const index = this.state.carts.findIndex((item) => item.id === product.id);

    //Nếu sản phẩm chưa tồn tại trong giỏ hàng thì thêm vào giỏ hàng với sl là 1
    if (index === -1) {
      this.setState((state) => ({
        carts: [...state.carts, { ...product, quantity: 1 }],
      }));
    } else {
      //Nếu sản phẩm đã tồn tại trong giỏ hàng thì chỉ cần tăng sl thêm 1
      const newCarts = [...this.state.carts];
      newCarts[index].quantity += 1;
      this.setState({ carts: newCarts });
    }

    this.setState({ total: this.state.carts.length + 1 });
  };

  handleChangeQuantity = (productId, quantity) => {
    const index = this.state.carts.findIndex((item) => item.id === productId);

    //Tạo mảng mới để chứa thông tin thay đổi
    const newCarts = [...this.state.carts];

    //Nếu sl < 1 và giá trị của quantity = -1 thì xoá item đó
    if (newCarts[index].quantity === 1 && quantity === -1) {
      newCarts.splice(index, 1);
      this.setState({ carts: newCarts });
    } else {
      newCarts[index].quantity += quantity;
      this.setState({ carts: newCarts });
    }
  };

  render() {
    return (
      <div>
        <header className="bg-dark py-2">
          <div className="container content">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ab/Apple-logo.png/640px-Apple-logo.png"
              alt=""
              width="50px"
            />
            <h3 className="header-title mb-0">SHOES SHOP</h3>
            <div className="header-end">
              <button className="btn btn-cart" onClick={this.handleToggleCanvas}>
                <i className="bi bi-cart4"></i>
                <span className="total">{this.state.total}</span>
              </button>
              
            </div>
          </div>
        </header>

        <ProductList
          products={data}
          onShowDetail={this.handleToggleModal}
          onAddToCart={this.handleAddToCart}
        />

        <ProductDetails
          isOpen={this.state.isOpenModal}
          onClose={this.handleToggleModal}
          product={this.state.selectedProduct}
        />

        <Cart
          isOpen={this.state.isOpenCanvas}
          onClose={this.handleToggleCanvas}
          carts={this.state.carts}
          onChangeQuantity={this.handleChangeQuantity}
        />
      </div>
    );
  }
}
