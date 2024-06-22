import React, { useRef, useEffect, useState } from "react";
import "../../Css/TypeListView.css";

export default function TypeListView(props) {
  const [isAtStart, setIsAtStart] = useState(true);
  const [isAtEnd, setIsAtEnd] = useState(false);
  const listOfTypes = [
    "hd background",
    "wood",
    "white",
    "road",
    "business",
    "summer",
    "grass",
    "zoom ackground",
    "beach",
    "cool background",
    "wallpaper",
    "hd wallpaper",
    "HD wallpaper",
    "background texture",
    "cd edit background",
    "christmas",
  ];

   
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);

  const scrollRef = useRef(null);
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: -500,
        behavior: "smooth",
      });
      console.log("Current scroll position:", scrollRef.current.scrollLeft);
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: 500,
        behavior: "smooth",
      });
    }
  };

  const checkScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      setIsAtStart(scrollLeft === 0);
      setIsAtEnd(scrollLeft + clientWidth === scrollWidth);
    }
  };

  useEffect(() => {
    
    const currentScroll = scrollRef.current;
    function handleResize() {
      setMediaWidth(window.innerWidth);
    }
    handleResize();
    if (currentScroll) {
      currentScroll.addEventListener("scroll", checkScrollButtons);
      window.addEventListener("resize", handleResize);
    }

    return () => {
      if (currentScroll) {
        currentScroll.removeEventListener("scroll", checkScrollButtons);
        window.removeEventListener("resize", handleResize);
      }
    };
  }, []);

  return (
    <>
    
      <div
        className="scrollmenu-container"
        style={{
          marginBottom:"10px",
          width:
            mediaWidth > 1500
              ? window.innerWidth * 0.8
              : window.innerWidth * 0.9,
        }}
      >
        <button
          className={`scroll-btn left-btn ${isAtStart ? "hidden" : ""}`}
          disabled={isAtStart}
          onClick={scrollLeft}
        >
          &#10094;
        </button>

        <div
          className="scrollmenu"
          ref={scrollRef}
          style={{
            overflow: "auto",
            msOverflowStyle: "none",
            scrollbarWidth: "none",
          }}
        >
          {listOfTypes.map((value, index) => (
            <div
              key={index}
              className="item"
              style={{ cursor: "pointer" }}
              onClick={() => {
                props.setCategory(value);
              }}
            >
              <span>{value}</span>
            </div>
          ))}
        </div>

        <button
          className={`scroll-btn right-btn ${isAtEnd ? "hidden" : ""}`}
          disabled={isAtEnd}
          onClick={scrollRight}
        >
          &#10095;
        </button>
      </div>
    </>
  );
}
