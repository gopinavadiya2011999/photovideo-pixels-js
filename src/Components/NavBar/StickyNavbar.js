import "../../Css/StickyNavbar.css";
import React, { useEffect, useState } from "react";
import CommonNavBar from "../View/CommonNavBar";
import SearchBarWithDropDown from "./SearchBar";
import video from "../../assets/videos/37.mp4";

export default function StickyNavbar(props) {
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      props.setScroll(window.scrollY > 501);
    });
    function handleResize() {
      setIsLargeScreen(window.innerWidth);
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <>
  
      <header
        className={`${props.scroll ? "sticky" : "normalView"}`}
        style={{ background: props.scroll && "white" }}
      >
        <CommonNavBar
          visibility={!props.scroll && "hidden"}
          setSelectedItemIndex={props.setSelectedItemIndex}
          selecteSearchItem={props.selecteSearchItem}
          setSelecteSearchItem={props.setSelecteSearchItem}
        />
        {!props.scroll && (
          <>
            <div
              style={{
                width: "100%",
                marginTop: "100px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  fontSize: "30px",
                  color: "white",
                  width: isLargeScreen < 905 ? "90%" : "35rem",
                  marginBottom: "20px",
                }}
              >
                The best free stock photos, royalty free images & videos shared
                by creators.
              </span>
              <div
                style={{
                  width: isLargeScreen < 905 ? "90%" : "41rem",
                }}
              >
                <SearchBarWithDropDown
                  show={"show"}
                  setSelectedItemIndex={props.setSelectedItemIndex}
                  selecteSearchItem={props.selecteSearchItem}
                  setSelecteSearchItem={props.setSelecteSearchItem}
                />
              </div>
            </div>
          </>
        )}
        {!props.scroll && (
          <div
            style={{
              color: "rgb(182,179,119)",
              right: "10px",
              bottom: "10px",
              position: "absolute",
              fontSize: "14px",
              display: "flex",
            }}
          >
            <div>Photo by</div>
            <div style={{ color: "rgb(212, 207, 207)", marginLeft: "5px" }}>
              Nadine Ginzel
            </div>
          </div>
        )}
        {!props.scroll && props.selecteSearchItem === "Videos" && (
          <video autoPlay muted loop className="video-background">
            <source src={video} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </header>
    </>
  );
}
