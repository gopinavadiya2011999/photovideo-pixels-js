import React, { useEffect, useState, useRef } from "react";
import "../../Css/videoList.css";
import heart from "../../assets/wallpapers/heart.png";
import { Link } from "react-router-dom";
// import heartFilled from "../../assets/wallpapers/filledheart.png";
import bookMark from "../../assets/wallpapers/ribbon.png";
// import bookMarkFilled from "../../assets/wallpapers/ribbonfilled.png";
import download from "../../assets/wallpapers/download.png";

import play from "../../assets/play.png";
import downloadBlack from "../../assets/downloadblack.png";
import FilterPopular from "./FilterPopular";
import OrientationPopUp from "./FilterPopups/OrientationPopUp";
import AllSizesPopUp from "./FilterPopups/AllSizesPopUp";
import ColorsDropDown from "./FilterPopups/ColorsDropdown";
import VideoDetailModal from "./VideoDetailModal";

const images = require.context("../../assets/wallpapers", true);
const imageList = images.keys().map((image) => images(image));
const videos = require.context("../../assets/videos", true);
const videoList = videos.keys().map((image) => videos(image));
const listOfVideo = [
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    hover: "false",
    profile: imageList[1],
    userName: "Donold Triprs",
    pic: `${videoList[1]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    profile: imageList[2],
    userName: "Pixabay",
    box: "equal",
    hover: "false",
    pic: `${videoList[2]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    hover: "false",
    box: "equal",
    userName: "H.Emre",
    profile: imageList[3],
    pic: `${videoList[3]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Nout Gons",
    hover: "false",
    profile: imageList[4],
    pic: `${videoList[4]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    userName: "Rickey Esqival",
    box: "equal",
    hover: "false",
    profile: imageList[5],
    pic: `${videoList[5]}`,
  },
  {
    collection: "Wallpapers",
    hover: "false",
    type: "hdbackrounds",
    box: "equal",
    userName: "Macime Fransis",
    profile: imageList[6],
    pic: `${videoList[6]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "long",
    userName: "Cameron Casey",
    hover: "false",
    profile: imageList[7],
    pic: `${videoList[7]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Flo Dahm",
    hover: "false",
    profile: imageList[8],
    pic: `${videoList[8]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Abby Chung",
    hover: "false",
    profile: imageList[9],
    pic: `${videoList[9]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    userName: "Yuting Gao",
    box: "equal",
    hover: "false",
    profile: imageList[10],
    pic: `${videoList[10]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Josh Hild",
    profile: imageList[11],
    pic: `${videoList[11]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    hover: "false",
    userName: "Steven Arena",
    profile: imageList[12],
    pic: `${videoList[12]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Alex Quian",
    hover: "false",
    profile: imageList[13],
    pic: `${videoList[13]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Orlando Vera",
    profile: imageList[14],
    pic: `${videoList[14]}`,
    hover: "false",
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Francesco Ungaro",
    hover: "false",
    profile: imageList[15],
    pic: `${videoList[15]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    hover: "false",
    userName: "Joey Kyber",
    box: "square",
    profile: imageList[16],
    pic: `${videoList[16]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    hover: "false",
    userName: "JONNATHAS LUIS DE SILVA",
    profile: imageList[17],
    pic: `${videoList[17]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Aleksandar Pasaric",
    hover: "false",
    profile: imageList[18],
    pic: `${videoList[18]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    hover: "false",
    userName: "Belle Co",
    profile: imageList[19],
    pic: `${videoList[19]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "vertical",
    hover: "false",
    userName: "Burst",
    profile: imageList[20],
    pic: `${videoList[20]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "horizontal",

    hover: "false",
    userName: "Rowdy",
    profile: imageList[21],
    pic: `${videoList[21]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Mack Kamp",
    hover: "false",
    profile: imageList[22],
    pic: `${videoList[22]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Revanshi Shah",
    hover: "false",
    profile: imageList[23],
    pic: `${videoList[23]}`,
  },
];

function VideoList(props) {
  const [selectedImage, setSelectedImage] = useState(null);

  const [orientationTitle, setOrientationTitle] = useState(null);
  const [allSizeTitle, setAllSizeTitle] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [listOfVideos, setImageList] = useState(listOfVideo || []);
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [filterValue, setfilterValue] = useState(null);
  const [filterShow, setFilterShow] = useState(false);
  const imageRefs = useRef(listOfVideos.map(() => React.createRef()));
  const [showModal, setShowModal] = useState(false);

  const handleVideoDownload = (videoUrl, e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = videoUrl;
    link.download = videoUrl.substring(videoUrl.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const onMouseEnterInImg = (index) => {
    setShowModal(false);
    setImageList((prevList) => {
      const newList = [...prevList];
      newList[index] = { ...newList[index], hover: "true" };

      return newList;
    });
    if (imageRefs.current[index].current) {
      imageRefs.current[index].current.play();
    }
  }; 

  const onMouseLeftInImg = (index) => {
    setImageList((prevList) => {
      const newList = [...prevList];
      newList[index] = { ...newList[index], hover: "false" };

      return newList;
    });
    if (imageRefs.current[index].current) {
      imageRefs.current.forEach((videoRef) => {
        if (!videoRef.current.paused) {
          videoRef.current.pause();
        }
      });
    }
  };

  useEffect(() => {
    function handleResize() {
      setMediaWidth(window.innerWidth);
    }

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [listOfVideos]);

  return (
    <>
      <div
        style={{
          marginTop: !props.noTopMargin ? "190px" : "30px",
          width:
            mediaWidth > 1500
              ? window.innerWidth * 0.8
              : window.innerWidth * 0.9,
        }}
      >
        {props.category && (
          <div style={{ marginBottom: "35px" }}>
            <span className="cattitle">{props.category}</span>
            <div className="d-flex" style={{ marginTop: "20px" }}>
              <div style={{ flexGrow: "1" }}>
                <button className="photosbutton">
                  Photos
                  <span className="subDetail">190.27k</span>
                </button>
                <span className="black-hover" style={{ marginLeft: "20px" }}>
                  Videos
                  <span className="subDetail">28.9k</span>
                </span>
                <span className="black-hover" style={{ marginLeft: "20px" }}>
                  Users
                  <span className="subDetail">8.1k</span>
                </span>
              </div>
              {mediaWidth > 665 && (
                <FilterPopular
                  setSelectedColor={setSelectedColor}
                  setAllSizeTitle={setAllSizeTitle}
                  setOrientationTitle={setOrientationTitle}
                  setfilterValue={setfilterValue}
                  filterValue={filterValue}
                  setFilterShow={setFilterShow}
                />
              )}
            </div>
            {mediaWidth < 665 && (
              <FilterPopular
                setOrientationTitle={setOrientationTitle}
                setAllSizeTitle={setAllSizeTitle}
                setSelectedColor={setSelectedColor}
                setfilterValue={setfilterValue}
                filterValue={filterValue}
                setFilterShow={setFilterShow}
              />
            )}
            {filterShow && (
              <div
                className={mediaWidth < 800 ? `block` : `d-flex`}
                style={{ marginTop: "20px" }}
              >
                <OrientationPopUp
                  setfilterValue={setfilterValue}
                  orientationTitle={orientationTitle}
                  setOrientationTitle={setOrientationTitle}
                />
                <div style={{ marginTop: mediaWidth < 800 ? "10px" : null }} />
                <AllSizesPopUp
                  setfilterValue={setfilterValue}
                  allSizeTitle={allSizeTitle}
                  setAllSizeTitle={setAllSizeTitle}
                />
                <div style={{ marginTop: mediaWidth < 800 ? "10px" : null }} />
                <ColorsDropDown
                  setfilterValue={setfilterValue}
                  selectedColor={selectedColor}
                  setSelectedColor={setSelectedColor}
                />
              </div>
            )}
          </div>
        )}
        <div
          className="image-grid"
          style={{
            width:
              mediaWidth > 1500
                ? window.innerWidth * 0.8
                : window.innerWidth * 0.9,
          }}
        >
          {listOfVideos.map((value, index) => (
            <div
              className={`image-item ${mediaWidth > 650 && "image-wrapper"}`}
              key={index}
              onMouseEnter={() => onMouseEnterInImg(index)}
              onMouseLeave={() => onMouseLeftInImg(index)}
              style={{ position: "relative", cursor: "pointer" }}
              onClick={() => {
                setShowModal(false);
                setSelectedImage(null);
                setSelectedImage(value);
                setShowModal(true);
              }}
            >
              <video
                src={value.pic}
                autoPlay={value.hover === "true"}
                ref={imageRefs.current[index]}
                loop
                style={{ width: "100%", height: "auto", marginBottom: "15px" }}
              />
              {mediaWidth > 650 && value.hover === "true" && (
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{ position: "absolute", top: "15px", right: "10px" }}
                >
                  <Link to="/join">
                    {" "}
                    <img
                      className="fav-bookmark"
                      src={heart}
                      style={{
                        width: "35px",
                        height: "35px",

                        padding: "8px",
                        borderRadius: "8px",
                      }}
                    />
                  </Link>
                </div>
              )}

              <div
                style={{
                  position: "absolute",
                  top: "15px",
                  margin: "0px",
                  left: "10px",
                  background: "black",
                  paddingLeft: "5px",
                  paddingTop: "5px",
                  opacity: "0.8",
                  border: "none",
                  height: "24px",

                  width: "24px",
                  borderRadius: "50px",
                }}
              >
                <button
                  type="button"
                  style={{
                    background: "white",
                    borderRadius: "50px",
                    border: "none",
                    height: "14px",
                    width: "14px",
                  }}
                >
                  <img
                    src={play}
                    style={{
                      padding: "4px",
                    }}
                  />
                </button>
              </div>

              {mediaWidth > 650 && value.hover === "true" && (
                <>
                  <div
                    onClick={(e) => e.stopPropagation()}
                    style={{ position: "absolute", top: "15px", right: "52px" }}
                  >
                    <Link to="/join">
                      {" "}
                      <img
                        className="fav-bookmark"
                        src={bookMark}
                        style={{
                          width: "35px",
                          height: "35px",

                          padding: "8px",
                          borderRadius: "8px",
                        }}
                      />
                    </Link>
                  </div>
                </>
              )}

              {mediaWidth > 650 && value.hover === "true" && (
                <div
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: "1.5vw",
                    left: "0.8vw",
                    right: "0.8vw",
                  }}
                >
                  <div className="media">
                    <img
                      src={value.profile}
                      className="profile-picture"
                      style={{ width: "40px", height: "40px" }}
                    ></img>
                    <div
                      className="media-body truncate"
                      style={{
                        paddingLeft: "10px",
                        paddingBottom: "10px",
                        paddingRight: "10px",
                      }}
                    >
                      {value.userName}
                    </div>
                    {mediaWidth < 800 ? (
                      <button
                        type="button"
                        onClick={(e) => handleVideoDownload(value.pic, e)}
                        style={{
                          background: "white",
                          borderRadius: "8px",
                          border: "none",
                          height: "30px",

                          width: "30px",
                        }}
                      >
                        <img
                          src={downloadBlack}
                          style={{
                            padding: "7px",
                            color: "black",
                          }}
                        />
                      </button>
                    ) : (
                      <button
                        onClick={(e) => handleVideoDownload(value.pic, e)}
                        type="button"
                        className="align-self-center download-button"
                      >
                        <img
                          className="align-self-center"
                          src={download}
                          style={{
                            width: "25px",
                            height: "15px",
                            margin: "auto",
                            paddingRight: "10px",
                            marginBottom: "5px",
                          }}
                        />
                        Download
                      </button>
                    )}
                  </div>
                </div>
              )}
              {mediaWidth < 650 && (
                <div
                  onClick={(e) => handleVideoDownload(value.pic, e)}
                  style={{
                    display: "inline-block",
                    position: "absolute",
                    bottom: "20px",
                    right: "10px",
                  }}
                >
                  <button
                    type="button"
                    className="align-self-center"
                    style={{
                      background: "black",
                      borderRadius: "50px",
                      border: "none",
                      height: "30px",
                      opacity: "0.8",
                      width: "30px",
                      marginBottom: "10px",
                    }}
                  >
                    <img
                      src={download}
                      style={{
                        padding: "8px",
                      }}
                    />
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
      <VideoDetailModal
        show={showModal}
        setShowModal={setShowModal}
        handleClose={() => {
          setShowModal(false);
          setSelectedImage(null);
        }}
        selectedImage={selectedImage ?? ""}
      />
    </>
  );
}
export default VideoList;
