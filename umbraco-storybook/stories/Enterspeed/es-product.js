import React from "react";
import "./es-product.css";

export default function EsProduct({ EsExampleData }) {
  return (
    <>
      <div className="es-product">
        <img src="/the-flying-trunk-book.jpg" className="es-product--image" />
        <div className="es-product--content">
          <h3>{EsExampleData.route.name}</h3>
          <p>{EsExampleData.route.description}</p>
          <p className="es-product--price">
            {EsExampleData.route.price}{" "}
            {EsExampleData.route.currency.view.defaultCurrency}
          </p>
        </div>
      </div>
    </>
  );
}
