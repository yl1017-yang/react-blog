//wraning 무시  /* eslint-disable */

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
      </div>

      {/* <button onClick={ ()=>{ 
        let copy = [...글제목];
        copy[0] = '★여자 코트 추천';
        글제목변경(copy);
      } }> 글수정 </button> */}

      {
        글제목.map(function(a, i) {
          return (
            <div className='list' key="i">
              <h4>{ 글제목[i] }</h4>
              <p>2월 17일</p>
            </div>
          )
        })
      }
      



      
    </div>
  );
}


// function Modal(props) {
//   return (
//     <>
//       <div className='modal'>
//         <h4>글제목</h4>
//         <p>날짜</p>
//         <p>상세내용</p>
//       </div>
//     </>    
//   )
// }

// 컴포넌트 만드는법
// 1. function 맨 하단에 만들고 작명(작명은 영문 대문자로 시작)
// 2. return()안에 html 담기
// 3. <함수명></함수명>쓰기
// <></> 플래그먼트 문법 : 의미없는 div 대신 사용

// 부모->자식 state 전송하는 법
// 1. <자식컴포넌트 작명={state이름}>
// 2. props 파라미터 등록 후 props.작명 사용

//강의내용 - props를 응용한 상세페이지 만들기



export default App;