import React, { useState, useEffect } from "react";
import letterp from "../../assets/letterp.png";
import { Link, Outlet } from "react-router-dom";
import "../../App.css";
import image1 from "../../assets/wallpapers/1.png";
import image2 from "../../assets/wallpapers/2.jpg";
import CommonJoinView from "../CommonViews/CommonJoinView";
import JoinComnColView from "../CommonViews/JoinComnColView";

export default function JoinScreen() {
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
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
  return (
    <>
      <div
        className="container-fluid fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <nav style={{ margin: "15px 0px", padding: "0px" }}>
          <ul
            className="nav-ul"
            style={{
              display: "flex",
              width: "fit-content",
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <li style={{ width: "78vw" }}>
              <Link
                to="/"
                className="link"
                style={{
                  lineHeight: "45px",
                  verticalAlign: "middle",
                }}
              >
                <img
                  src={letterp}
                  alt=""
                  style={{
                    width: "45px",
                    height: "45px",
                    marginRight: "10px",
                  }}
                />
                <span
                  style={{
                    color: "black",
                    fontSize: "25px",
                    fontWeight: "semi-bold",
                  }}
                >
                  Pexels
                </span>
              </Link>
            </li>
            <li style={{ marginRight: "10px" }}>
              <Link to="/login" className="link">
                <button
                  type="button"
                  className="btn btn-info"
                  style={{
                    background: "#059377",
                    padding: "12px 20px",
                    color: "white",
                    borderRadius: "6px",
                  }}
                >
                  Login
                </button>
              </Link>
            </li>
          </ul>
          <Outlet />
        </nav>
        <div className="dropdown-divider" />
      </div>
      <div
        style={{
          marginTop: "110px",
          fontSize: "50px",
          fontWeight: "normal",
          width: "500px",
          textAlign: "center",
        }}
      >
        What do you mainly want to do?
      </div>

      {mediaWidth > 900 ? (
        <div
          className="d-flex "
          style={{ margin: "35px 0px", justifyContent: "center" }}
        >
          <CommonJoinView
            image={image1}
            desc="I'm here to download free photos and videos."
            buttonLink="/download"
            buttonText="I want to download"
            margin="0px 15px 0px 0px"
          />
          <CommonJoinView
            image={image2}
            desc="I'm here to share my photos and videos with the world."
            buttonLink="/contribute"
            buttonText="I want to contribute"
            margin="0px 0px 0px 15px"
          />{" "}
        </div>
      ) : (
        <>
        <div style={{marginTop:"10px",marginBottom:"30px"}}>
        <JoinComnColView  title="Download" desc="I'm here to download free photos and videos."/>
        <div style={{marginTop:"10px"}}/>
        <JoinComnColView  title="Contribute" desc="I'm here to share my photos and videos with the world."/>
        <div className="d-flex align-items-center">
        <Link to="/choose"  className="link">
                <button 
                  type="button"
                  className="btn btn-info"
                  style={{
                    width:"30rem",
                    marginTop:"20px",
                    background: "#059377",
                    padding: "12px 20px",
                    color: "white",
                    justifyContent:"center",
                    borderRadius: "6px",
                  }}
                >
                  Choose
                </button>
              </Link>

        </div>
        </div>
        </>
      

      
      
      
      )}
      <div
        style={{
          fontSize: "16px",
          fontWeight: "normal",
          width: mediaWidth > 675 ? "40rem" : "95%",
          color: "grey",
          textAlign: "center",
        }}
      >
        We’ll use this info to personalize your experience. You’ll always be
        able to both download and upload photos and videos, no matter which
        option you choose.
      </div>
    </>
  );
}
