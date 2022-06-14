import logo from "./logo.svg";
import "./App.css";
import React, { useState } from "react";

function App() {
  let [글제목, 글제목변경함수] = useState(["블랙 말랑 카우", "핑크 말랑 카우"]);
  let [따봉, 따봉변경] = useState(0);
  return (
    <div className="App">
      <div className="black_cow">
        <div className="dogfoot">개발 TEST</div>
      </div>
      <div className="list">
        <h3>
          {글제목[0]}{" "}
          <span
            onClick={() => {
              따봉변경(따봉 + 1);
            }}
          >
            👍
          </span>{" "}
          {따봉}
        </h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
      <div className="list">
        <h3> {글제목[1]}</h3>
        <p>2월 18일 발행</p>
        <hr />
      </div>
    </div>
  );
}

export default App;
