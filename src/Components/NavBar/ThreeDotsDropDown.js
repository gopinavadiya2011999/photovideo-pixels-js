import React, { useRef } from "react";
import dots from "../../assets/dots.png";
import dotsBlack from "../../assets/dots-black.png";
import { Link } from "react-router-dom";

const ThreeDotsDropDown = (props) => {
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
    <>
     <div
  className="dropdown"
  style={{ padding: "0px 20px", display: "inline-block", borderRadius: "5px 0px 0px 5px" }}
  onMouseEnter={handleMouseEnter}
  onMouseLeave={handleMouseLeave}
>
  <button
    className="dropdown-toggle"
    href="#"
    role="button"
    data-toggle="dropdown"
    aria-expanded="false"
    style={{ display: "inline-block", borderRadius: "10px 0px 0px 10px", background: "none", border: "none" }}
  >
    <img src={props.white ? dots : dotsBlack} style={{ width: "24px", height: "24px" }} />
  </button>
  <div className="dropdown-menu" style={{ color: "black" }} ref={dropdoenRef}>
    <Link className="dropdown-item" to="#">Login</Link>
    <Link className="dropdown-item" to="#">Join</Link>
    <div className="dropdown-divider" />
    <Link className="dropdown-item" to="/language">Change Language</Link>
    <Link className="dropdown-item" to="#">Image & Video API</Link>
    <Link className="dropdown-item" to="#">Apps & Plugins</Link>
    <Link className="dropdown-item" to="#">FAQ</Link>
    <Link className="dropdown-item" to="#">Report Content</Link>
    <Link className="dropdown-item" to="#">Partnership</Link>
    <Link className="dropdown-item" to="#">Imprint & Terms</Link>
    <div className="dropdown-divider" />
  </div>
</div>

    </>
  );
};

export default ThreeDotsDropDown;
