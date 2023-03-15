import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "@styles/ProductDetail.scss";
import Axios from "axios";
import close from "@icons/icon_close.png";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  useEffect(() => {
    Axios.get(`https://api.escuelajs.co/api/v1/products/${id}`).then((res) =>
      setProduct(res.data)
    );
  }, [id]);
  return (
    <>
      <div className="ProductDetail">
        <div className="ProductDetail-close">
          <img src={close} alt="close" />
        </div>

        {product && (
          <>
            <h1>{product.title}</h1>
            <img src={product.images[0]} alt={product.title} />
            <h3>$ {product.price}</h3>
            <h2>{product.description} </h2>
          </>
        )}
      </div>
    </>
  );
};

export default ProductDetail;
