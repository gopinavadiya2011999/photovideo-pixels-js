import React, { useEffect, useState, useRef } from "react";
import "../../Css/ImageList.css";
import { Link, Outlet } from "react-router-dom";
// import heartFilled from "../../assets/wallpapers/filledheart.png";
import heart from "../../assets/wallpapers/heart.png";
import bookMark from "../../assets/wallpapers/ribbon.png";
// import bookMarkFilled from "../../assets/wallpapers/ribbonfilled.png";
import download from "../../assets/wallpapers/download.png";
import downloadBlack from "../../assets/downloadblack.png";
import FilterPopular from "./FilterPopular";
import OrientationPopUp from "./FilterPopups/OrientationPopUp";
import AllSizesPopUp from "./FilterPopups/AllSizesPopUp";
import ColorsDropDown from "./FilterPopups/ColorsDropdown";
import ImageDetailModal from "./ImageDetailModal";
const images = require.context("../../assets/wallpapers", true);
const imageList = images.keys().map((image) => images(image));
const listOfImage = [
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Revanshi Shah",
    hover: "false",
    pic: `${imageList[0]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    hover: "false",
    userName: "Donold Triprs",
    pic: `${imageList[1]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    userName: "Pixabay",
    box: "equal",
    hover: "false",
    pic: `${imageList[2]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    hover: "false",
    box: "equal",
    userName: "H.Emre",
    pic: `${imageList[3]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Nout Gons",
    hover: "false",
    pic: `${imageList[4]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    userName: "Rickey Esqival",
    box: "equal",
    hover: "false",
    pic: `${imageList[5]}`,
  },
  {
    collection: "Wallpapers",
    hover: "false",
    type: "hdbackrounds",
    box: "equal",
    userName: "Macime Fransis",
    pic: `${imageList[6]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "long",
    userName: "Cameron Casey",
    hover: "false",
    pic: `${imageList[7]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Flo Dahm",
    hover: "false",
    pic: `${imageList[8]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Abby Chung",
    hover: "false",
    pic: `${imageList[9]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    userName: "Yuting Gao",
    box: "equal",
    hover: "false",
    pic: `${imageList[10]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Josh Hild",
    pic: `${imageList[11]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    hover: "false",
    userName: "Steven Arena",
    pic: `${imageList[12]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "equal",
    userName: "Alex Quian",
    hover: "false",
    pic: `${imageList[13]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Orlando Vera",
    pic: `${imageList[14]}`,
    hover: "false",
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Francesco Ungaro",
    hover: "false",
    pic: `${imageList[15]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    hover: "false",
    userName: "Joey Kyber",
    box: "square",
    pic: `${imageList[16]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    hover: "false",
    userName: "JONNATHAS LUIS DE SILVA",
    pic: `${imageList[17]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Aleksandar Pasaric",
    hover: "false",
    pic: `${imageList[18]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    hover: "false",
    userName: "Belle Co",
    pic: `${imageList[19]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "vertical",
    hover: "false",
    userName: "Burst",
    pic: `${imageList[20]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "horizontal",

    hover: "false",
    userName: "Rowdy",
    pic: `${imageList[21]}`,
  },
  {
    collection: "Wallpapers",
    type: "hdbackrounds",
    box: "square",
    userName: "Mack Kamp",
    hover: "false",
    pic: `${imageList[22]}`,
  },
];

function ImagesList(props) {
  const [orientationTitle, setOrientationTitle] = useState(null);
  const [allSizeTitle, setAllSizeTitle] = useState(null);
  const [selectedColor, setSelectedColor] = useState(null);

  const [listOfImages, setImageList] = useState(listOfImage);
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [filterValue, setfilterValue] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [filterShow, setFilterShow] = useState(false);
  const imageRefs = useRef(listOfImages.map(() => React.createRef()));


  const handleImageDownload = (imageLink,e) => {
    e.stopPropagation();
    const link = document.createElement("a");
    link.href = imageLink;
    link.download = imageLink.substring(imageLink.lastIndexOf("/") + 1);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  const onMouseEnterInImg = (index) => {
    setImageList((prevList) => {
      const newList = [...prevList];
      if (newList[index] === listOfImages[index]) {
        newList[index] = { ...newList[index], hover: true };
        return newList;
      } else {
        newList[index] = { ...newList[index], hover: false };
        return newList;
      }
    });
  };

  const onMouseLeftInImg = (index) => {
    setImageList((prevList) => {
      const newList = [...prevList];
      if (newList[index] === listOfImages[index]) {
        newList[index] = { ...newList[index], hover: false };
        return newList;
      } else {
        newList[index] = { ...newList[index], hover: false };
        return newList;
      }
    });
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
  }, []);

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
          {listOfImages.map((value, index) => (
            <div
              className={`image-item ${mediaWidth > 650 && "image-wrapper"}`}
              key={index}
              onMouseEnter={() => onMouseEnterInImg(index)}
              onMouseLeave={() => onMouseLeftInImg(index)}
              style={{ position: "relative" }}
              onClick={() => {
                //get this code from video list this modal is old 
              //video list modal is latest 
                setSelectedImage(value);
                const bsModal = new window.bootstrap.Modal(imageRefs.current);
                bsModal.show();
              }}
            >
              <img
                src={value.pic}
                alt={`Image ${index}`}
                ref={imageRefs.current[index]}
              />

              {mediaWidth > 650 && value.hover === true && (
                <div
                onClick={(e)=>  e.stopPropagation()}
                  style={{ position: "absolute", top: "15px", right: "10px" }}
                >
                  <Link to="/join">
                    
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
                  <Outlet />
                </div>
              )}
              {mediaWidth > 650 && value.hover === true && (
                <div
                onClick={(e)=>  e.stopPropagation()}
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
                  <Outlet />
                </div>
              )}
              {mediaWidth > 650 && value.hover === true && (
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
                      src={value.pic}
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
                        onClick={(e) => handleImageDownload(value.pic, e)}
                        type="button"
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
                      onClick={(e) => handleImageDownload(value.pic, e)}
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
                onClick={(e) => handleImageDownload(value.pic, e)}
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
      <ImageDetailModal
        modalRef={imageRefs}
        selectedImage={selectedImage ?? ""}
      />
    </>
  );
}

export default ImagesList;
