import ThreeDotsDropDown from "../NavBar/ThreeDotsDropDown";
import ExploreDropDown from "../NavBar/ExploreDropDown";
import menu from "../../assets/menu.png";
import menuWhite from "../../assets/menu-white.png";
import React, { useEffect, useState } from "react";
import "../../App.css";
import { Link, Outlet,useParams } from "react-router-dom";
import SearchBarWithDropDown from "../NavBar/SearchBar";

export default function CommonNavBar(props) {
 
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setIsLargeScreen(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <>
      <nav
        style={{
          margin: "15px 0px",

          padding: "0px",
        }}
      >
        <ul
          className="nav-ul justify-content-center"
          style={{
            display: "flex",
            width: "fit-content",
            flexDirection: "row",
          }}
        >
          <li>
            <Link to="/" className="link">
              <span style={{ color: props.visibility && "white" }}>Pexels</span>
            </Link>
          </li>

          {
            <SearchBarWithDropDown
              visibility={props.visibility}
              selecteSearchItem={props.selecteSearchItem}
              setSelectedItemIndex={props.setSelectedItemIndex}
              setSelecteSearchItem={props.setSelecteSearchItem}
            />
          }
          <li style={{ display: `${isLargeScreen < "905" ? "none" : ""}` }}>
            <ExploreDropDown white={props.visibility} />
          </li>
          <li style={{ display: `${isLargeScreen < "905" ? "none" : ""}` }}>
            <Link target="_blank" to="/license" className="link">
              <span
                style={{
                  padding: "0px 20px",
                  color: props.visibility && "white",
                }}
              >
                License
              </span>
            </Link>
          </li>
          <li style={{ display: `${isLargeScreen < "905" ? "none" : ""}` }}>
            <Link target="_blank" to="/upload" className="link">
              <span style={{ color: props.visibility && "white" }}>Upload</span>
            </Link>
          </li>

          <li style={{ display: `${isLargeScreen < "905" ? "none" : ""}` }}>
            <ThreeDotsDropDown white={props.visibility} />
          </li>
          <li style={{ display: `${isLargeScreen < "620" ? "none" : ""}` }}>
            <Link to="/join" className="link">
              <button
                type="button"
                className="btn btn-info"
                style={{
                  border: "none",
                  outline: "none",
                  background: props.visibility ? "white" : "#059377",
                  padding: "12px 22px",
                  color: props.visibility ? "black" : "white",
                }}
              >
                Join
              </button>
            </Link>
          </li>
          {isLargeScreen < 905 && (
            <li>
              <img
                src={props.visibility ? menuWhite : menu}
                style={{ height: "24px", width: "24px", marginLeft: "20px" }}
                alt=""
              />
            </li>
          )}
        </ul>
        
        <Outlet />
      </nav>
    </>
  );
}
