import { useState, useEffect } from "react";
import axios from "axios";

const useGetProduct = (API) => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function fetchData() {
      const response = await axios(API);
      setProduct(response.data);
    }
    fetchData();
  }, []);
  return product;
};
export default useGetProduct;
