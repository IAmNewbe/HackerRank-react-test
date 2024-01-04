import React from "react";
import './App.css';
import ProductValidation from "./components/productValidation";
import 'h8k-components';

const title = "Product Validation";

function App() {
  return (
    <div>
      <h8k-navbar header={title}></h8k-navbar>
      <div className="layout-row justify-content-center mt-50">
        <ProductValidation />
      </div>
    </div>
  );
}

export default App;
