import React from 'react';
import "./App.css";
import { BrowserRouter} from "react-router-dom";
import RoutesPages from "./router";
import Header from './components/header';
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <RoutesPages />
      </div>
    </BrowserRouter>
  );
}

export default App;
