import React, { useState } from "react";
import "../../../Css/ImageList.css";
import {addDataInPref} from "../../Constants/MethodConstant";
import { Link } from "react-router-dom";

export default function ColorsDropDown(props) {
  const colors = [
    { name: "Dark Slate Gray", hex: "#2F4F4F" },
    { name: "Black", hex: "#000000" },
    { name: "Dark Red", hex: "#8B0000" },
    { name: "Dark Green", hex: "#006400" },
    { name: "Dark Blue", hex: "#00008B" },
    { name: "Dark Orange", hex: "#FF8C00" },
    { name: "Dark Yellow", hex: "#FFD700" },
    { name: "Dark Purple", hex: "#800080" },
    { name: "Dark Cyan", hex: "#008B8B" },
    { name: "Dark Gray", hex: "#A9A9A9" },
    { name: "Dark Brown", hex: "#654321" },
    { name: "Slate Gray", hex: "#708090" },
    { name: "Light Slate Gray", hex: "#778899" },
    { name: "Dim Gray", hex: "#696969" },
    { name: "Medium Slate Blue", hex: "#7B68EE" },
    { name: "Medium Orchid", hex: "#BA55D3" },
    { name: "Medium Purple", hex: "#9370DB" },
    { name: "Medium Sea Green", hex: "#3CB371" },
    { name: "Medium Turquoise", hex: "#48D1CC" },
    { name: "Medium Violet Red", hex: "#C71585" },
    { name: "Medium Aquamarine", hex: "#66CDAA" },
    { name: "Medium Blue", hex: "#0000CD" },
    { name: "Medium Spring Green", hex: "#00FA9A" },
    { name: "Medium Slate Blue", hex: "#7B68EE" },
    { name: "Medium Orchid", hex: "#BA55D3" },
    { name: "Medium Purple", hex: "#9370DB" },
    { name: "Medium Sea Green", hex: "#3CB371" },
    { name: "Medium Turquoise", hex: "#48D1CC" },
    { name: "Medium Violet Red", hex: "#C71585" },
  ];

  const [toggleFilter, setToggleFilter] = useState(false);
  const [inputValue, setInputValue] = useState(null);

  const handleItemTapEvent = (item) => {
    props.setSelectedColor(item);
    setInputValue(null); 
    addDataInPref(item.hex, "color", props.setfilterValue);
    setToggleFilter(false); 
  };

  const onTapDropDown = (e) => {
    e.stopPropagation(); // Prevent event from propagating to the document
    setToggleFilter(!toggleFilter);
  };

  React.useEffect(() => {


    const handleClickOutside = (event) => {
      if (!event.target.closest(".dropdown")) {
        setToggleFilter(false);
      }
    };

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="dropdown" style={{ width: "100%" }}>
      <button
        className={`filter-popular dropdown-spacebetweenmain`}
        onClick={onTapDropDown}
        role="button"
        aria-expanded={toggleFilter}
        style={{ width: "100%",background:props.selectedColor ?"#ededed":null,  border: props.selectedColor ?"0.3px solid black":null }}
      >
        <div
          style={{
            width: "30px",
            borderRadius: "50px",
            border: "1px solid rgb(165, 165, 165)",
            marginRight: "10px",
            height: "30px",
            background:inputValue?? (props.selectedColor  ? props.selectedColor .hex : "white"),
          }}
        ></div>
        <input
         className="colorField"
          style={{ flexGrow: "1",border:"none" ,outline:"none",background:props.selectedColor ?"#ededed":null,color:"black"}}
          value={inputValue||"Enter hex code"}
          onChange={(e) => setInputValue(e.target.value)}
          placeholder={props.selectedColor  ? props.selectedColor .hex : "Enter hex code"}
        />
        <span
          className={`toggle ${
            toggleFilter ? "toggle-ups" : "toggle-downs"
          } down-arrow`}
        ></span>
      </button>
      {toggleFilter && (
        <div
          className="dropdown-menu d-flex flex-wrap p-2"
          style={{ width: "100%" }}
        >
          {colors.map((item, index) => (
            <Link
              key={index}
              className="dropdown-item p-1"
              onClick={() => handleItemTapEvent(item)}
             
              style={{
                display: "flex",
                alignItems: "center",
                margin: "2px",
                padding: "2px",
                height: "25px",
                width: "calc(13.5% - 10px)",
                boxSizing: "border-box",
                backgroundColor: item.hex,
                justifyContent: "center",
                cursor: "pointer",
              }}
            ></Link>
          ))}
        </div>
      )}
    </div>
  );
}
