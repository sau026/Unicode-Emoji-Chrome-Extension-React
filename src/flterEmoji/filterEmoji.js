import React, { useState, useEffect } from "react";
import firebase from "../firebase";
import { Unicode } from "../unicode";
import { AllUnicode } from "../allUnicode";
import Tooltip from "@material-ui/core/Tooltip";
import "./filterEmoji.css";

export default function FilterEmoji(props) {
  const onSearch = (e) => {
    // setSearchText(e.target.value)
    console.log("saurabh check", e.target.value);
  };

  const filterData = () => {
    let finalData = AllUnicode.filter((ele, i) => {
      console.log("saurabh final data 111111:", (ele.group = props.searchText));
      if (ele.group == props.searchText) {
        return ele;
      }
    });
    console.log("saurabh final data:", finalData, props.searchText);
  };

  return (
    <>
      {/* <span>Click on your favourite icon and copy it to clipboard!!</span> */}
      <input
        id="search__box"
        placeholder="Type atleast two character to search unicode....."
        type="text"
        onChange={onSearch}
      ></input>
    </>
  );
}
