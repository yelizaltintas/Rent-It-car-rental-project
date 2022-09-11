import React, {Component} from "react";
import Cars from "./components/Cars"
import Navigation from "./components/Navigation";
import Body from "./components/Body";
import Slider from "./components/Slider";
import "./App.css";
import styled from "styled-components";
import { AccountBox } from "./components/accountBox";

  class App extends Component {

    constructor (props) {
      super(props);

      const AppContainer = styled.div
      `
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      `;
        
      this.state = {
        cars:[
          {
            id: 1,
            name: "Mercedes",
            price: 500
          },
          {
            id: 2,
            name: "BMW",
            price: 600
          },
          {
            id: 3,
            name: "Volvo",
            price: 700
          }
        ]
      };

    }

    render() {
      return (

        <div>

          <Navigation/>
          <Cars/>
          <Body/>
          <Slider/>
          <AccountBox/>

        </div>
      );
    }
  }

export default App;