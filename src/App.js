/* eslint-disable */
import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '스피커 추천', '쿠팡 쇼핑 꿀팁']);
  let [따봉, 따봉변경] = useState(0);
  let posts = '강남 고기 맛집';

  return (
    <div className="App">
      <div className="black-nav">
        <div>개발 Blog</div>
      </div>
      <div className="list">
        <h3> {글제목[0]} <span onClick={ () => {따봉변경(따봉 + 1)}}>👍</span> {따봉} </h3>
        <p>7월 27일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[1]} </h3>
        <p>8월 1일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h3> {글제목[2]} </h3>
        <p>8월 3일 발행</p>
        <hr/>
      </div>
      <button onClick={ () => {글제목변경(['여자 코트 추천', '스피커 추천', '쿠팡 쇼핑 꿀팁'])}}>글 제목 변경</button>
    </div>
  );
}

export default App;
