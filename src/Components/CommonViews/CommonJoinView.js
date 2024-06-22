import React from 'react';
import { Link } from "react-router-dom";

export default function CommonJoinView(props) {
  return (
    <div className="card" style={{
      width: "25rem",
      borderRadius: "10px",
      border: "1px dashed rgb(177, 173, 173)",
      margin: props.margin
  }}>
      <img src={props.image} alt="..." style={{
          margin: "5px",
          width: "auto",
          height: "180px",
          borderRadius: "10px"
      }} />
      <div className="card-body" style={{
          display: "flex", 
          flexDirection: "column", 
          justifyContent: "space-between", 
          height: "100%", 
          padding: "0px",
          margin: "8px"
      }}>
          <p className="card-text" style={{
              fontSize: "18px",
              textAlign: "center",
              paddingTop: "10px",
              flexGrow: 1, 
          }}>
              {props.desc}
          </p>
         
      </div>
       <Link to={props.buttonLink} className="link">
              <button
                  type="button"
                  className="btn btn-info"
                  style={{
                      background: "#059377",
                      padding: "12px 20px",
                    marginBottom:"8px",
                      width: "24rem",
                      borderRadius: "6px",
                  }}
              >
                  {props.buttonText}
              </button>
          </Link>
  </div>
  
  )
}
