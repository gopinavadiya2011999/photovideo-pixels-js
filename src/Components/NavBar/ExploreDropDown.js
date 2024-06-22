
import React, {  useRef } from "react";
import '../../App.css';

export default function ExploreDropDown(props) {

    const dropdoenRef = useRef(null);

    const handleMouseEnter = () => {
        if (dropdoenRef.current) {
          dropdoenRef.current.classList.add("show");
        }
      };
    
      const handleMouseLeave = () => {
        if (dropdoenRef.current) {
          dropdoenRef.current.classList.remove("show");
        }
      };
  return (
    <div
    className="dropdown"
    style={{
      display: "inline-block",
      borderRadius: "5px 0px 0px 5px",
    }}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
  >
    <button
      className="dropdown-toggle"
      href="#"
      role="button"
      data-toggle="dropdown"
      aria-expanded="false"
      style={{
        display: "inline-block",
        borderRadius: "10px 0px 0px 10px",
        background: "none",
        border: "none",
      }}
    >
    
      <span style={{color:props.white?"white":"black"}}>Explore</span>
      <span className="down-arrow" style={{color:props.white?"white":"black"}}></span>
     
    </button>
    <div className="dropdown-menu" ref={dropdoenRef}>
      <a className="dropdown-item" href="#">
        Discover Photos
      </a>
      <a className="dropdown-item" href="#">
        Popular Searches
      </a>
      <a className="dropdown-item" href="#">
        Leaderboard
      </a>
      <a className="dropdown-item" href="#">
        Challenges
      </a>
      <a className="dropdown-item" href="#">
        Free Videos
      </a>
      <a className="dropdown-item" href="#">
        Pexels Blog
      </a>
    </div>
  </div>
  )
}
