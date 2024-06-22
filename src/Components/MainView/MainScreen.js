import StickyNavbar from "../NavBar/StickyNavbar";
import "../../Css/StickyNavbar.css";
import TabView from "./TabView";
import { useState,useEffect } from "react";
import ImagesList from "../View/ImagesList";
import TrendingPopUp from'../MainView/TrendingPopUp.js';
import VideoList from '../View/VideoList.js';

export default function MainScreen() {
  const [scroll, setScroll] = useState(false);
  const [mediaWidth, setMediaWidth] = useState(window.innerWidth);
  const [catHint, setcatHint] = useState(null);
  const [selectedItemIndex, setSelectedItemIndex] = useState(1);

const [selecteSearchItem,setSelecteSearchItem] = useState("Photos");
useEffect(() => {

  function handleResize() {
    setMediaWidth(window.innerWidth);
  }
  handleResize();
  window.addEventListener("resize", handleResize);

  return () => {
    window.removeEventListener("resize", handleResize);
  };
});
  return (
    <>
    
      <StickyNavbar  selecteSearchItem={selecteSearchItem}
      
      scroll={scroll} setScroll={setScroll}
      setSelecteSearchItem={setSelecteSearchItem} setSelectedItemIndex ={setSelectedItemIndex}/>
      <div style={{ height: "20px" }} />
      <div className={scroll?'dataList':""}>
      <TabView  selecteSearchItem={selecteSearchItem} setSelecteSearchItem={setSelecteSearchItem} selectedItemIndex={selectedItemIndex} setSelectedItemIndex ={setSelectedItemIndex}/>
      {(selectedItemIndex === 1 || selectedItemIndex===2)&& (
        <>
          <div
            style={{
              display:"flex",
        
              marginTop: "20px",
              width:
                mediaWidth > 1500
                  ? window.innerWidth * 0.8
                  : window.innerWidth * 0.9,
            
            }}
          >
           <span style={{   flexGrow:"1", fontSize: "24px",
             }}> Free Stock {selectedItemIndex===1?'Photos':'Videos'}</span>
            <TrendingPopUp catHint={catHint} setcatHint={setcatHint}/>
          </div>

          {selectedItemIndex===1?<ImagesList noTopMargin={true} />:<VideoList noTopMargin={true}/>}
        </>
      )}
      </div>
    </>
  );

}
