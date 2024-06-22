import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import "../../Css/ImageList.css";

export default function TrendingPopUp(props) {
  const dropDownItem = [
    {
      selected: true,
      name: "Trending",
      onClick: (item, index) => {
        handleItemTapEvent(item, index);
      },
    },
    {
      selected: false,
      name: "New",
      onClick: (item, index) => {
        handleItemTapEvent(item, index);
      },
    },


  ];

  const [dropDownItems, setDropDownItem] = useState(dropDownItem || []);
  const [toggleFilter, settoggleFilter] = useState(false);

  const handleItemTapEvent = (item, index) => {
 
    setDropDownItem((prevItems) =>
      prevItems.map((prevItem, i) => ({
        ...prevItem,
        selected: i === index,
      }))
    );

    props.setcatHint(item.name);
  };

  const onTapDropDown = () => {
    settoggleFilter(!toggleFilter);
  };

  return (
    <div
      className="dropdown"
      onClick={onTapDropDown}
    >
      <button
        className={`filter-popular dropdown-spacebetweenmain`}
        href="#"
        data-toggle="dropdown"
        aria-expanded="false"
        
      >
        <span style={{ flexGrow: "1" }}>{props.catHint ?? "Trending"}</span>

        <span
          className={`toggle ${
            toggleFilter ? "toggle-ups" : "toggle-downs"
          } down-arrow`}
        ></span>
      </button>
      <div className="dropdown-menu p-2" style={{ width: "100%" }}>
        {dropDownItems.map((item, index) => (
    
            <Link
              key={index}
              className="dropdown-item dropdown-spacebetween p-2"
              onClick={() => item.onClick(item, index)}
              to="#"
            >
              <span
                style={{
                  flexGrow: "1",
                  color: item.selected ? "black" : "grey",
                }}
              >
                {item.name}
              </span>
              {item.selected && (
                <i className="fa-solid fa-check" aria-hidden="true"></i>
              )}
            {index !== dropDownItems.length - 1 && (
              <div className="dropdown-divider p-0 m-0"></div>
            )}
            </Link>
        
        ))}
      </div>
    </div>
  );
}
