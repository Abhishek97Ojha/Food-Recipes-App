import React, { useContext } from "react";
import { FaSearch } from "react-icons/fa";
import "./Navbar.css";
import { MyContext } from "../App";
const Navbar = () => {
    const context = useContext(MyContext);
  return (
    <div className="navbar">
      <div className="left">
        <h1>Food Ingredients</h1>
      </div>
      <div className="right">
        <div className="search-box">
          <button 
            className="btn-search"  
            onClick={()=>{
                // console.log(context.value);
                context.setValue(context.value)
            }}>
            <FaSearch />
          </button>
          <input
            type="text"
            className="input-search"
            placeholder="Type to Search..."
            onChange={(e)=>{
                context.setValue(e.currentTarget.value)
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
