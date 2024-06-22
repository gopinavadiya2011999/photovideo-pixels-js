import React, { useState, useEffect } from "react";
import "../../Css/ImageVideoModal.css";
import heart from "../../assets/wallpapers/heart.png";
import bookMark from "../../assets/wallpapers/ribbon.png";
import TypeListView from "../NavBar/TypeListView";
import VideoList from "./VideoList";
import { Modal } from "react-bootstrap";

export default function VideoDetailModal(props) {
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [category, setCategory] = useState("");

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
      <Modal show={props.show} className="fullscreen-modal" centered size="lg">
        <Modal.Body>
          <div
            className="modal-content"
            onClick={props.handleClose}
            style={{ background: "transperent", height: "auto" }}
          >
            <i
              className="fa-solid fa-close close-styles"
              onClick={props.handleClose}
            ></i>
            <div className="modal-styles" >
              <div className="pad-lrs" onClick={(e)=>e.stopPropagation()}>
                <div
                  className={
                    mediaWidth > 1275 ? `top-modal-header` : `col-display`
                  }
                >
                  <div
                    className={
                      mediaWidth > 1275
                        ? "profile-detail"
                        : "container row-btns"
                    }
                  >
                    <img
                      src={props.selectedImage.profile}
                      className="profile-picture"
                      alt=""
                    ></img>

                    <div className="user-info">
                      <span
                        className="m-0 pl-3"
                        style={{ color: "black", fontWeight: "500" }}
                      >
                        {props.selectedImage.userName}
                      </span>
                      <span
                        className="m-0 pl-3"
                        style={{ color: "grey", fontWeight: "500" }}
                      >
                        Follow
                      </span>
                    </div>
                  </div>
                  <div
                    className={
                      mediaWidth > 1275
                        ? `d-flex justify-content-center`
                        : "container row-btns mb-2"
                    }
                  >
                    <span className="border-side">
                      <img className="icons-size" src={bookMark} alt="" />
                      Collect
                    </span>
                    <span
                      className="border-side"
                      style={{ margin: "0px 10px" }}
                    >
                      <img className="icons-size" src={heart} alt="" />
                      Like <span style={{ color: "grey" }}>150</span>
                    </span>
                    <span
                      style={{ display: mediaWidth < 575 && "none" }}
                      className="border-side"
                    >
                      <img className="icons-size" src={heart} alt="" />
                      Edit in Canva
                    </span>
                    <span
                      style={{ display: mediaWidth < 777 && "none" }}
                      className="free-download"
                    >
                      Free Download
                    </span>
                  </div>

                  <div
                    className="container mt-3"
                    style={{ display: mediaWidth > 777 && "none" }}
                  >
                    <span style={{ margin: "0px" }} className="free-download">
                      Free Download
                    </span>
                    <span
                      style={{
                        display: mediaWidth > 575 && "none",
                        marginLeft: "10px",
                      }}
                      className="border-side"
                    >
                      <img className="icons-size" src={heart} alt="" />
                      Edit in Canva
                    </span>
                  </div>
                </div>

                <div>
                  <div
                    className={`body-image`}
                    style={{ marginTop: mediaWidth < 1275 && "20px" }}
                  >
                    <video
                      className="user-image"
                      src={props.selectedImage.pic}
                      autoPlay={props.selectedImage.hover === "true"}
                      loop
                    />
                  </div>
                </div>
                <div
                  className="bottom-view"
                  style={{
                    flexDirection: mediaWidth < 1220 && "column",
                    justifyContent: "flex-start",
                  }}
                >
                  <div
                    className="bottom-container"
                    style={{
                      flexGrow: "1",
                      width: mediaWidth < 1220 && "100%",
                    }}
                  >
                    <div className="change-color">
                      <i className="fa-solid fa-check" aria-hidden="true"></i>
                    </div>
                    <span className="grey-text">Free to use</span>
                    <i
                      className="fa-solid fa-location normal-icon"
                      aria-hidden="true"
                    ></i>
                    <span className="grey-text">Berlin, BE, Deutschland</span>
                    <i
                      className="fa-solid fa-book normal-icon"
                      aria-hidden="true"
                    ></i>
                    <span className="grey-text">
                      Passersby Between the Colonnades of the Arcade
                    </span>
                  </div>
                  <div
                    className="bottom-buttons"
                    style={{
                      width: mediaWidth < 1220 && "100%",
                      marginTop: mediaWidth < 1220 && "20px",
                    }}
                  >
                    <span className="border-side d-flex justify-content-center">
                      <i
                        className="fa-solid fa-info info-icon"
                        aria-hidden="true"
                      ></i>
                      More info
                    </span>
                    <span className="border-side d-flex justify-content-center ml-2">
                      <i
                        className="fa-solid fa-share"
                        style={{ color: "grey", marginRight: "5px" }}
                        aria-hidden="true"
                      ></i>
                      Share
                    </span>
                    <span className="d-flex justify-content-center ml-2">
                      <i
                        className="fa-solid fa-map mapIcon"
                        style={{ color: "grey", marginRight: "5px" }}
                        aria-hidden="true"
                      ></i>
                    </span>
                  </div>
                </div>
                <div
                  style={{
                    overflow: "hidden",
                    marginLeft: mediaWidth < 1220 && "20px",
                    marginRight: mediaWidth < 1220 && "20px",
                  }}
                >
                  <div style={{ marginBottom: "20px" }}>
                    <span className="cattitlea">
                      {category ? category : "More Like this"}
                    </span>
                  </div>
                  <TypeListView setCategory={setCategory} />
                  <VideoList noTopMargin={true}  />
                </div>
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}
