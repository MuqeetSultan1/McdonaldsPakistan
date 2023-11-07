import React from "react";
import {
  Mcdonaldslogo,
  MenuImg1,
  MenuImg2,
  MenuImg3,
  MenuImg4,
  MenuImg5,
  MenuImg6,
  MenuImg7,
  MenuImg8,
  MenuImg9,
  MenuImg10,
  MenuImg11,
  MenuImg12,
} from "./AllImages";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const menuItems = [
  { imgSrc: MenuImg1, text: "Breakfast", link: "/Breakfast" },
  { imgSrc: MenuImg2, text: "Beef", link: "/Beef" },
  { imgSrc: MenuImg3, text: "Chicken & Fish", link: "/Chickenandfishproducts" },
  { imgSrc: MenuImg4, text: "Crispy Chicken", link: "/CrispyChicken" },
  { imgSrc: MenuImg5, text: "Wraps", link: "/Wraps" },
  { imgSrc: MenuImg6, text: "Happy Meals", link: "/HappyMeals" },
  { imgSrc: MenuImg7, text: "Extra Value Meals", link: "/EVM" },
  { imgSrc: MenuImg8, text: "Value Meals", link: "/VM" },
  { imgSrc: MenuImg9, text: "Desserts", link: "/Desserts" },
  { imgSrc: MenuImg10, text: "Beverages", link: "/Beverages" },
  { imgSrc: MenuImg11, text: "McCafe", link: "/Mccafe" },
  { imgSrc: MenuImg12, text: "Fries & Sides", link: "/FAS" },
];

const Navbar = () => {
  let result = useSelector((state) => state.cartRedList);
  console.log("result", result);

  function sumKeyValues(arr, key) {
    if (!Array.isArray(arr) || arr.length === 0) {
      return "0";
    }

    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i][key] !== undefined && typeof arr[i][key] === "number") {
        sum += arr[i][key];
      }
    }

    return sum;
  }

  return (
    <div className="container-fluid Menucontainer1">
      <div className="row row1">
        <div className="col-lg-1 col-sm-1 col-md-1 col2 ">
          <a href="/">
            <img src={Mcdonaldslogo} className="logo" />
          </a>
        </div>
        <div className="col-lg-10 col-sm-10 col-md-10 col3">
          <div className="row col3div1 mb-4">
            <div className="col-lg-1 col-sm-1 col-md-1">
              <Link className="footerptag1">Careers</Link>
            </div>

            <div className="col-lg-1 col-sm-1 col-md-1 col3div2">
              <Link to="/Contactus" className="footerptag1">
                Contact Us
              </Link>
            </div>

            <div className="col-lg-8 col-sm-8 col-md-8 col3div3"></div>

            <div className="col-lg-1 col-sm-1 col-md-1 col3div4">
              <a className="footerptag1">
                <FontAwesomeIcon icon={faMagnifyingGlass} className="me-2" />
                Search
              </a>
            </div>

            <div className="col-lg-1 col-sm-1 col-md-1 col3div5">
              <a className="footerptag1">
                <FontAwesomeIcon icon={faLocationDot} className="me-2" />
                Locate Me
              </a>
            </div>
          </div>

          <div className="row">
            <div className="ourmenu">
              <p className="footerptag1">Our Menu</p>
              <div className="drop-down">
                {menuItems.map((item, index) => (
                  <div key={index}>
                    <NavLink to={item.link} className="footerptag1">
                      <img
                        src={item.imgSrc}
                        height={100}
                        width={100}
                        alt={item.text}
                      />
                      <p>{item.text}</p>
                    </NavLink>
                  </div>
                ))}
              </div>
            </div>

            <div className="secondmenu">
              <a className="footerptag1 me-5">About Our Food</a>
              <a className="footerptag1 me-5">Your Right to Know</a>
              <a className="footerptag1 me-5">Our App</a>
              <a className="footerptag1 me-5">Family</a>
              <a className="footerptag1 me-5">Trending Now</a>
            </div>
          </div>
        </div>
        <div className="col-lg-1 col-sm-1 col-md-1 w-72 h-24 ">
          <div className="flex justify-start">
            <button className="btn btn-warning">Order On Mcdelivery</button>
            <Link to={'/CheckoutPage'}><i class="fa-solid fa-cart-shopping text-amber-400 text-2xl mt-1 ms-3">
              {sumKeyValues(result, "quantity")}
            </i></Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
