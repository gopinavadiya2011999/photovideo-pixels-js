import React, { useState } from "react";
import "../../../Css/ImageList.css";
import { addDataInPref } from "../../Constants/MethodConstant";
import { Link } from "react-router-dom";

export default function AllSizesPopUp(props) {
  const dropDownItem = [
    {
      selected: true,
      name: "All Sizes",
      onClick: (item, index) => {
        handleItemTapEvent(item, index);
      },
    },
    {
      selected: false,
      name: "Large",
      onClick: (item, index) => {
        handleItemTapEvent(item, index);
      },
    },
    {
      selected: false,
      name: "Medium",
      onClick: (item, index) => {
        handleItemTapEvent(item, index);
      },
    },
    {
      selected: false,
      name: "Small",
      onClick: (item, index) => {
        handleItemTapEvent(item, index);
      },
    },
  ];
  const [dropDownItems, setDropDownItem] = useState(dropDownItem || []);
  const [toggleFilter, settoggleFilter] = useState(false);
  const handleItemTapEvent = (item, index) => {
    

    setDropDownItem((prevItems) =>
      prevItems.map((prevItem, i) => ({
        ...prevItem,
        selected: i === index,
      }))
    );
    props.setAllSizeTitle(item.name);
    addDataInPref(item.name, "allSize", props.setfilterValue,props.setAllSizeTitle);
  };

  const onTapDropDown = () => {
    settoggleFilter(!toggleFilter);
  };

  return (
    <div
      className="dropdown"
      style={{ width: "100%", marginRight: "20px" }}
      onClick={onTapDropDown}
    >
      <button
        className={`filter-popular dropdown-spacebetweenmain`}
        href="#"
        role="button"
        data-toggle="dropdown"
        aria-expanded="false"
        style={{
          width: "100%",
          background: props.allSizeTitle ? "#ededed" : null,
          border: props.allSizeTitle ? "0.3px solid black" : null,
        }}
      >
        <span style={{ flexGrow: "1" }}>
          {props.allSizeTitle ?? "All Sizes"}
        </span>

        <span
          className={`toggle ${ toggleFilter ? "toggle-ups" : "toggle-downs"} down-arrow`}
        ></span>
      </button>
      <div className="dropdown-menu p-2" style={{ width: "100%" }}>
        {dropDownItems.map((item, index) => (
          <Link
            key={index}
            className="dropdown-item dropdown-spacebetween p-2"
            onClick={() => item.onClick(item, index)}
           
          >
            <span
              style={{
                flexGrow: "1",
                color: item.selected ? "black" : "grey",
              }}
            >
              {item.name}
            </span>
            {item.selected && (
              <i className="fa-solid fa-check" aria-hidden="true"></i>
            )}
            {index !== dropDownItems.length - 1 && (
              <div className="dropdown-divider p-0 m-0"></div>
            )}
          </Link>
        ))}
      </div>
    </div>
  );
}
