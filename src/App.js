import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./componentes/Home";
import Hoteles from "./componentes/Hoteles";
import Paquetes from "./componentes/Paquetes";
import Nav from "./componentes/Nav";
import React from "react";
import axios from "axios";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoteles: [],
      paquetes: [],
    };
  }
  async request() {
    await axios("https://pruebagcd.herokuapp.com/paquetes").then(res =>
      this.setState({
        paquetes: res.data,
      })
    );
  }

  componentDidMount() {
    this.request()
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <Nav />
          <Routes>
            <Route exact path="/" element={<Home />}></Route>
            <Route path="/hoteles" element={<Hoteles />}></Route>
            <Route path="/paquetes" element={<Paquetes data={this.state.paquetes}/>}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
