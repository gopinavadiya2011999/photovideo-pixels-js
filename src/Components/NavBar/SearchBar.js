import gallryImage from "../../assets/gallary.png";
import line from "../../assets/line.png";
import film from "../../assets/film.png";
import React, { useEffect, useState } from "react";


import "@fortawesome/fontawesome-free/css/all.min.css";
import "../../App.css";
import { Link,useNavigate } from "react-router-dom";

const SearchBarWithDropDown = (props) => {
  const navigate = useNavigate();
  
  const [bgSearchColor, setSearchBgColor] = useState("#f7f7f7");
  const [searchBorder, setsearchBorder] = useState("none");
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const dropdownRef = React.useRef(null);

  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSearch = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.add("show");
    }
  };
  const searchBarMouseLeave = () => {
    setSearchBgColor("#f7f7f7");
    setsearchBorder("none");
  };

  const changeSearchBarColor = () => {
    setSearchBgColor("white");
    setsearchBorder("1px solid rgba(179, 179, 177,1)");
  };
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const handleSearchLeave = () => {
    if (dropdownRef.current) {
      dropdownRef.current.classList.remove("show");
    }
  };

const onSearchDropDownTap=(data)=>{

props.setSelecteSearchItem(data);
props.setSelectedItemIndex(data==="Photos"?1:2);
}


  return (
    <>
      <div
        className="d-flex justify-content-center"
        onMouseLeave={searchBarMouseLeave}
        style={{
          visibility: props.visibility,
          borderRadius: "10px",
          padding: "5px",
          margin: "0px 2.5vw",
          background: `${bgSearchColor}`,
          border: `${searchBorder}`,
        }}
      >
        <span style={{ border: "none" }}>
          <div
            className="dropdown"
            style={{
              display: "inline-block",

              borderRadius: "5px 0px 0px 5px",
            }}
            onMouseEnter={handleSearch}
            onMouseLeave={handleSearchLeave}
          >
            <button
              className="dropdown-toggle"
              href="#"
              // role="button"
              data-toggle="dropdown"
              aria-expanded="false"
              style={{
                padding: "6px 10px",

                display: "inline-block",
                border: props.show ? "1px solid rgb(211, 209, 209)" : "none",
                backgroundColor: props.show
                  ? "rgb(221, 221, 221)"
                  : "transparent",
                marginRight: props.show && "20px",
                borderRadius: props.show ? "5px" : "10px 0px 0px 10px",
              }}
            >
              <img
                src={gallryImage}
                alt=""
                style={{
                  width: "24px",
                  height: "20px",
                  paddingBottom: "5px",
                  paddingRight: "5px",
                  paddingLeft: "5px",
                }}
              />
              {props.selecteSearchItem}
              <span
                className="down-arrow"
                style={{ marginRight: "10px" }}
              ></span>
              {!props.show && (
                <img
                  src={line}
                  alt=""
                  style={{
                    width: "10px",
                    height: "20px",
                    marginBottom: "4px",
                    marginRight: "5px",
                    marginLeft: "5px",
                  }}
                />
              )}
            </button>
            <div className="dropdown-menu" ref={dropdownRef}>
              <Link className="dropdown-item" onClick={()=>onSearchDropDownTap("Photos")}>
                <img
                  src={gallryImage}
                  alt=""
                  style={{
                    width: "24px",
                    height: "20px",
                    color:props.selecteSearchItem==="Photos"&&"green",
                    paddingBottom: "5px",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                />
                Photos
              </Link>
              <Link className="dropdown-item" onClick={()=>onSearchDropDownTap("Videos")}>
                <img
                 alt=""
                  src={film}
                  style={{
                    color:props.selecteSearchItem==="Videos"&&"green",
                    width: "24px",
                    height: "20px",
                    paddingBottom: "5px",
                    paddingRight: "5px",
                    paddingLeft: "5px",
                  }}
                />{" "}
                Videos
              </Link>
            </div>
          </div>
        </span>
        <input
          type="text"
          placeholder={`Search for free ${props.selecteSearchItem==="Photos"?"photos":"videos"}`}
          onClick={changeSearchBarColor}
          onChange={handleInputChange}
          style={{
            width: `${screenWidth < 905 ? "40vw" : "31vw"}`,
            outline: "none",
            border: "none",
            background: "none",
          }}
          aria-label="Input with prefix and suffix"
        />
        <span
          style={{
            textAlign: "end",
            border: "none",
            borderRadius: "0px 5px 5px 0px",
            background: "none",
            marginRight: "10px",
          }}
        >
          <i className="fas fa-search" onClick={()=>{
            
             let  id = inputValue??"";
              navigate(`/type/${id}`);

          }}></i>
        </span>
      </div>
    </>
  );
};

export default SearchBarWithDropDown;
