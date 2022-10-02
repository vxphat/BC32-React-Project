import React, { Component } from "react";
import GlassesList from "./GlassesList";
import Header from "./Header";
import Model from "./Model";
import data from "./dataGlasses.json";
import "./style.css";
import TestGlasses from "./TestGlasses";

export default class Glasses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedGlasses: null,
    };
  }

  handleSelect = (glass) => {
    //glass: kính khi click vào từng loại
    this.setState({ selectedGlasses: glass });
  };

  render() {
    return (
      <div className='background'>
        <Header />
        <Model glass={this.state.selectedGlasses}/>
        <TestGlasses glass={this.state.selectedGlasses}/>
        <GlassesList glassess={data} onSelect={this.handleSelect}/>
      </div>
    );
  }
}
