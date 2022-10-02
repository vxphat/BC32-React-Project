import React, { Component } from "react";
import GlassesList from "./GlassesList";
import Header from "./Header";
import data from "./dataGlasses.json";
import "./style.css";
import TestGlasses from "./TestGlasses";

export default class Glasses extends Component {
  constructor(glass) {
    super(glass);

    this.state = {
      selectedGlasses: glass,
    };
  }

  handleSelect = (glass) => {
    //glass: kính khi click vào từng loại
    this.setState({ selectedGlasses: glass });

    //Lưu thông tin của loại kính được chọn xuống localstoreage
    localStorage.setItem("Glasses", JSON.stringify(glass))
  };

  render() {
    return (
      <div className="background">
        <header>
          <Header />
        </header>
        <div className="container text-center mt-5">
          <div className="row">
            <div className="col-8 p-0">
              <img
                className="img-model"
                src="./img/model.png"
                alt="model"
                width="250px"
              />
            </div>
            <div className="col-4" >
              <TestGlasses glass={this.state.selectedGlasses} />
            </div>
          </div>
        </div>
        <GlassesList glassess={data} onSelect={this.handleSelect} />
      </div>
    );
  }
}
