import React, { useEffect } from "react";
import '../../Css/StickyNavbar.css';
import { Link } from "react-router-dom";

export default function TabView(props) {
  const selectedTabItem = "tabbar-span";
 

  const onTabItemSelected = (index) => {
    if (index === 1 || index === 2) {
      index === 1
        ? props.setSelecteSearchItem("Photos")
        : props.setSelecteSearchItem("Videos");
    }
    props.setSelectedItemIndex(index);
  };

  useEffect(() => {
    if (props.selecteSearchItem === "Photos") {
      props.setSelectedItemIndex(1);
    }
   
  });

  return (
    <>
  
  <div className="tabbar" >
        <span
          className={`${
            props.selectedItemIndex === 1 ? "tabSelected" : selectedTabItem
          }`}
          onClick={() => onTabItemSelected(1)}
        >
          Home
        </span>
        <span
          className={`${
            props.selectedItemIndex === 2 ? "tabSelected" : selectedTabItem
          }`}
          onClick={() => onTabItemSelected(2)}
        >
          Videos
        </span>
        <Link
          to="/leaderboard"
          className={`${
            props.selectedItemIndex === 3 ? "tabSelected" : selectedTabItem
          }`}
          onClick={() => onTabItemSelected(3)}
        >
          Leaderboard
        </Link>
        <Link
          to="/challenges"
          className={`${
            props.selectedItemIndex === 4 ? "tabSelected" : selectedTabItem
          }`}
          onClick={() => onTabItemSelected(4)}
        >
          Challenges
        </Link>
      </div>
     

    </>
  );
}
