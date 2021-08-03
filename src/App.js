import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [title1, 글제목변경1] = useState('남자 코트 추천');
  let [title2, 글제목변경2] = useState('스피커 추천');
  let [title3, 글제목변경3] = useState('쿠팡 쇼핑 꿀팁');



  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {title1} </h3>
        <p>7월 27일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title2} </h3>
        <p>8월 1일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {title3} </h3>
        <p>8월 3일 발행</p>
        <hr/>
      </div>
    </div>
  );
}

export default App;
