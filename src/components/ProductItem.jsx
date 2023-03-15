import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import "@styles/ProductItem.scss";
import AppContext from "../context/AppContext";
import addCartImage from "@icons/bt_add_to_cart.svg";

const ProductItem = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useContext(AppContext);
  const handleClick = (item) => {
    addToCart(item);
  };

  const onProductClickHandler = () => {
    navigate(`/products/${product.id}`);
  };
  return (
    <div className="ProductItem">
      <img
        src={product.images[0]}
        alt={product.title}
        onClick={onProductClickHandler}
      />
      <div className="product-info">
        <div>
          <p>$ {product.price}</p>
          <p>{product.title}</p>
        </div>
        <figure onClick={() => handleClick(product)}>
          <img src={addCartImage} alt="" />
        </figure>
      </div>
    </div>
  );
};

export default ProductItem;
