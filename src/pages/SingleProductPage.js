import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, emptyCart, removeCartAction } from "../redux/action";
import Footer from "../components/Footer";
import selectAllProducts from "./Selector";

const SingleProductPage = () => {
  const allProducts = useSelector(selectAllProducts);
  const cartList = useSelector((state) => state.cartRedList);

  const burgers = allProducts.burgers;
  const muffins = allProducts.muffins;
  const beverages = allProducts.beverages;
  const chickenAndFish = allProducts.chickenAndFish;
  const crispyChicken = allProducts.crispyChicken;
  const happyMeal = allProducts.happyMeal;
  const evm = allProducts.evm;
  const vm = allProducts.vm;
  const dessert = allProducts.dessert;
  const mccafe = allProducts.mccafe;
  const wraps = allProducts.wraps;
  const fas = allProducts.fas;
  const removeCartRed = allProducts.removeCartRed;

  let params = useParams();

  const dispatch = useDispatch();

  const [product, setProduct] = useState(null);
  console.log("products____", product);

  const getProductsData = async () => {
    try {
      console.log("params", params);

      const response = await fetch(
        `http://localhost:8000/api/v1/auth/getData/${params.id}`
      );
      console.log("response____", response);

      if (!response.ok) {
        throw new Error("Failed to fetch product data");
      }

      const data = await response.json();
      console.log("data____", data);

      // filtering

      for (const category in data) {
        // category => array
        for (const item in data[category]) {
          if (data[category][item]._id === params.id) {
            setProduct(data[category][item]);
          }
        }
      }
    } catch (error) {
      console.error("Error fetching product data:", error);
    }
  };

  useEffect(() => {
    getProductsData();
  }, [params.id]);

  const sendItem = (x) => {
    let cart = findObjectById(cartList, x);
    if (cart) {
      dispatch(removeCartAction({ id: x }));
    }
    let quantity = cart?.quantity ? cart?.quantity + 1 : 1;
    dispatch(addToCart({ id: x, quantity }));
  };

  const removeQuantity = (x) => {
    let cart = findObjectById(cartList, x);
    if (cart?.quantity > 1) {
      dispatch(removeCartAction({ id: x }));
      let quantity = cart?.quantity > 1 ? cart?.quantity - 1 : 1;
      dispatch(addToCart({ id: x, quantity }));
    }
  };

  const removeItem = (x) => {
    dispatch(removeCartAction({ id: x }));
  };

  function findObjectById(array, id) {
    for (let i = 0; i < array.length; i++) {
      if (array[i].id === id) {
        return array[i];
      }
    }
    return null;
  }

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <Navbar />

      <div className="container my-5">
        <div className="card">
          <div className="card-body">
            <div className="row">
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-lg-4 col-md-4 col-sm-4 ">
                <div className="white-box text-center">
                  <img
                    src={`http://localhost:8000/uploads/${product.image}`}
                    width={400}
                    height={400}
                    className="img-responsive"
                  />
                </div>
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
              <div className="col-lg-5 col-md-5 col-sm-4">
                <h1 className="box-title mt-5 text-3xl font-sans font-extrabold">
                  {product.title}
                </h1>
                <h2 className="my-4 text-2xl font-medium">
                  Rs. {product.price}/-
                </h2>
                <h2 className="my-4 text-2xl font-medium">
                  Quantity.{" "}
                  {findObjectById(cartList, params?.id)?.quantity
                    ? findObjectById(cartList, params?.id)?.quantity
                    : 0}
                </h2>
                <button
                  className="btn btn-warning btn-rounded me-3   "
                  onClick={() => removeQuantity(product._id)}
                >
                  -
                </button>
                <button
                  className="btn btn-warning btn-rounded"
                  onClick={() => sendItem(product._id)}
                >
                  +
                </button>
                <br />
                <br />
                <button
                  onClick={() => sendItem(product._id)}
                  className="btn btn-warning btn-rounded me-3   "
                >
                  Add to Cart
                </button>
                <button
                  onClick={() => removeItem(product._id)}
                  className="btn btn-danger btn-rounded"
                >
                  Remove from cart
                </button>{" "}
                <br />
              </div>
              <div className="col-lg-1 col-md-1 col-sm-1"></div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default SingleProductPage;
