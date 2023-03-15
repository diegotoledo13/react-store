import React from "react";
import ProductItem from "../components/ProductItem";
import "../styles/ProductList.scss";
import useGetProduct from "../hooks/useGetProduct";

const API = "https://api.escuelajs.co/api/v1/products";

const ProductList = () => {
  const product = useGetProduct(API);
  return (
    <section className="main-container">
      <div className="ProductList">
        {product.map((product) => (
          <ProductItem product={product} key={product.key} />
        ))}
      </div>
    </section>
  );
};

export default ProductList;
