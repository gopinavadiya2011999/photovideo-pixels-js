import React, { useState } from "react";
import TypeListView from "./TypeListView";
import ImagesList from "../View/ImagesList";
import CommonNavBar from "../View/CommonNavBar";
import VideoList from "../View/VideoList";
import { useParams } from "react-router-dom";
function NavBarView() {
  const [category, setCategory] = useState("");
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);

  let { id } = useParams();
  const [selecteSearchItem, setSelecteSearchItem] = useState("Photos");

  useState(() => {
    setCategory(id);
  }, []);

  return (
    <>
      <div
        className="container-fluid fixed-top"
        style={{ backgroundColor: "white" }}
      >
        <CommonNavBar
          setSelectedItemIndex={setSelectedItemIndex}
          selecteSearchItem={selecteSearchItem}
          setSelecteSearchItem={setSelecteSearchItem}
        />
        <div
          className="container-fliud"
          style={{
            height: "1px",
            background: "rgba(179, 179, 177, 0.2)",
            marginBottom: "20px",
          }}
        ></div>
        <TypeListView setCategory={setCategory} />
      </div>
      {selecteSearchItem === "Videos" ? (
        <VideoList category={category} />
      ) : (
        <ImagesList category={category} />
      )}
    </>
  );
}

export default NavBarView;
