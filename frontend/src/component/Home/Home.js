import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getProduct } from "../../actions/productAction";
import ProductCard from "./ProductCard";
import Loader from "../layout/Loader/Loader";

const Home = () => {
  const dispatch = useDispatch();

  const { loading, error, products } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

console.log("PRODUCTS FROM BACKEND:", products);

  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        <div className="container">
          {error && <p style={{ color: "red" }}>{error}</p>}
          {products && products.length > 0 ? (
            products.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))
          ) : (
            <p>No products found</p>
          )}
        </div>
      )}
    </>
  );
};

export default Home;
