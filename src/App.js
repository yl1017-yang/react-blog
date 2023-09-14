//wraning 무시  /* eslint-disable */

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 때 변수 사용 : 
  let [logo, setLogo] = useState('ReactBlog'); // 자주 바뀌지 않아서 state 쓸 필요 없음
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState(0);  //따봉변경 -> state 변경함수

  // function 함수() {
  //   console.log(1);
  // }

  // array 자료
  // let num = [1, 2];
  // let [a, c] = [1, 2]; 
  // let a = num[0];
  // let c = num[1];

  // state 사용법 (자주 변경되는 html 부분 자동으로 재 랜더링)
  // 1. import { useState }
  // 2. useState(보관할 자료)
  // 3. let[작명, 작명]

  // document.querySelector('h4').innerHTML = post; 자바스크립트 문법
  // JSX 문법2
  // 데이터바인딩은 {중괄호}
  // JSX 문법3
  // style 넣을때 style={{스타일명 : '값'}}


  //Component : 많은 div들을 한 단어로 줄이고 싶으면


  return (
    <div className="App">
      <div className='black-nav'>
        <h4 id={ post }>{ logo }</h4>
        <span style={ {color : 'red', fontSize : '14px'} }>인라인 스타일</span>
      </div>
      <h4>{ post }</h4>

      <button>가나다순정렬</button>

      <button onClick={()=>{ 
        let copy = [...글제목]; // state가 array/object 면 독립적 카피본을 만들어서 수정해야함
        copy[0] = '★여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>
      {/* array/object 다룰때 원본을 보전하는게 좋음 copy본 변수 만들어서 사용 */}

      <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        {/* <h4>{ 글제목[0] } <span onClick={ 함수 }>👍</span> { 따봉 } </h4> */}
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[2] }</h4>
        <p>2월 17일</p>
      </div>

      
    </div>
  );
}

export default App;