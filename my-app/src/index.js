import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


// 루트노드
// React로 구현한 애플리케이션은 일반적으로 하나의 루트 DOM 노드가 존재하며,
// 기존 앱에 React를 점진적으로 추가하였다면 원하는 만큼 많은 수의 독립적인 Root dom노드가 존재할 수 있다.

/*
  리액트 구동을 위해선 dom앨리먼트를 ReactDom.createRoot()안에 넣어두고
  react앨리먼트 root.render()함수 안에 넣어두면 된다.
*/

const root = ReactDOM.createRoot(document.getElementById('root'));

// 버츄얼 돔(가상 돔)
root.render( 
    /*
      페이지 로딩 후 root.render() 함수 내부에 호출하고자하는 리액트 컴포넌트를 추가하면 해당컴포넌트가 호출됨
      APP이라는 컴포넌트를 사용하기 위해서는 상단에 import문으로 APP이 추가되어있어야함

      리액트에서 컴포넌트가 대문자로 시작하는 이유는, 리액트에서 소문자는 html dom요소(div, p, h2...)로 해석을 하고
      대문자로 시작하면 컴포넌트 요소로 해석하기 때문.
    */

    <App />  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
