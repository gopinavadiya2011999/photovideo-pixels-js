import React, { useState, useEffect } from "react";
import sort from "../../assets/sort.png";
import "../../Css/ImageList.css";

export default function FilterPopular(props) {
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [toggleFilter, settoggleFilter] = useState("toggle-down");
  const popularRef = React.useRef(null);
  
  useEffect(() => {
    function handleResize() {
      setMediaWidth(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const onFilterTap = () => {
    if (toggleFilter === "toggle-up") {
      props.setFilterShow(false);
      settoggleFilter("toggle-down");
    } else {
      props.setFilterShow(true);
      settoggleFilter("toggle-up");
    }
  };

  const handlePopularSearch = () => {
    if (popularRef.current) {
      popularRef.current.classList.add("show");
    }
  };
  const handlePopularSearchLeave = () => {
    if (popularRef.current) {
      popularRef.current.classList.remove("show");
    }
  };

  return (
    <div
      className={mediaWidth < 665 ? `d-flex` : "block"}
      style={{ marginTop: mediaWidth < 665 ? "20px" : "0px" }}
    >
      <div className="filtercl-parent" style={{flexGrow:"1"}}>
        <button
          className="filtercl"
          onClick={onFilterTap}
          style={{
            width: mediaWidth < 655 ? "50%" : "auto",
            borderRight: !props.filterValue && "none",
          }}
        >
          <img
            className={`toggle ${toggleFilter}`}
            src={sort}
            alt=""
            style={{
              height: "12px",
              width: "40px",
              paddingLeft: toggleFilter === "toggle-up" && "15px",
              paddingRight: toggleFilter === "toggle-down" && "15px",
            }}
          />
          <span style={{ paddingTop: "10px", paddingBottom: "10px" }}>
            Filters {props.filterValue && `(${props.filterValue})`}{" "}
          </span>
        </button>
        {props.filterValue && (
          <i
            className="fa-solid fa-close pl-3"
            aria-hidden="true"
            style={{ margin: "auto", paddingRight: "15px" }}
            onClick={(e) => {
              e.preventDefault();
              props.setSelectedColor(null);
              props.setAllSizeTitle(null);
              props.setOrientationTitle(null);
              props.setfilterValue(null);
              localStorage.removeItem("filterCount");
            }}
          ></i>
        )}
      </div>

      <div
        className="dropdown"
        style={{
          width: mediaWidth < 655 ? "50%" : "auto",
          display: "inline-flex",

          margin: "0px",
        }}
        onMouseEnter={handlePopularSearch}
        onMouseLeave={handlePopularSearchLeave}
      >
        <button
          className="dropdown-toggle filter-popular"
          href="#"
          role="button"
          data-toggle="dropdown"
          aria-expanded="false"
          style={{
            width: mediaWidth < 655 ? "95%" : "auto",

            display: "inline-flex",
            textAlign: "left",
            justifyContent: "space-between",
            alignItems: "center",
    marginLeft: "15px",
          }}
        >
          Popular
          <span
            className="down-arrow"
            style={{ boxSizing: "border-box", display: "inline-flex" }}
          ></span>
        </button>
        <div className="dropdown-menu" ref={popularRef}>
          <a className="dropdown-item dropdown-spacebetween" href="#">
            <span>Popular</span>{" "}
            <i className="fa-solid fa-check" aria-hidden="true"></i>
          </a>
          <a className="dropdown-item dropdown-spacebetween" href="#">
            <span>Videos</span>{" "}
            <i className="fa-solid fa-check" aria-hidden="true"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
