import React from "react";

export default function JoinComnColView(props) {
  return (
    <div
      className="d-flex align-items-center"
      style={{
        background: "#f7f7f7",
        borderRadius: "12px",
        width: "30rem",
        padding: "15px 15px",
      }}
    >
      <div
        className="form-check"
        style={{ display: "flex", alignItems: "center", width: "100%" }}
      >
        <input
          className="form-check-input"
          type="radio"
          name="exampleRadios"
          value="option1"
          checked
          style={{ width: "30px", height: "30px", accentColor: "#059377" }}
        />

        <label
          className="form-check-label"
          htmlFor="exampleRadios1"
          style={{
            display: "flex",
            flexDirection: "column",
            flexGrow: 1,
            paddingLeft: "25px",
            borderRadius: "5px",
          }}
        >
          <span style={{ margin: "0px", fontSize: "18px", fontWeight: "500" }}>
            {props.title}
          </span>
          <span style={{ margin: "0px", fontSize: "16px" }}>{props.desc}</span>
        </label>
      </div>
    </div>
  );
}
