//wraning 무시  /* eslint-disable */

// import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

function App() {

  let post = '강남 우동 맛집'; //자료 잠깐 저장할 때 변수 사용 : 
  let [logo, setLogo] = useState('ReactBlog'); // 자주 바뀌지 않아서 state 쓸 필요 없음
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0,0,0]);  //따봉변경 -> state 변경함수
  let [modal, setModal] = useState(false);

  var 어레이 = [];
  for (var i = 0; i < 3; i++) {
    어레이.push(<div>안녕</div>)
  }

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

  //map함수 : array  자료 갯수만큼 함수안의 코드 실행해줌
  // [1,2,3].map(function(a){
  //   return '1233211';
  //   console.log(a);
  // });

  return (
    <div className="App">
      <div className='black-nav'>
        <h4 id={ post }>{ logo }</h4>
        <span style={ {color : 'red', fontSize : '14px'} }>인라인 스타일</span>
      </div>
      <h4>{ post }</h4>

      <button onClick={ ()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
        console.log(copy);
      } }> 가나다순 정렬 </button>

      <button onClick={ ()=>{ 
        let copy = [...글제목]; // state가 array/object 면 독립적 카피본을 만들어서 수정해야함
        copy[0] = '★여자 코트 추천';
        글제목변경(copy);
      } }> 글수정 </button>
      {/* array/object 다룰때 원본을 보전하는게 좋음 copy본 변수 만들어서 사용 */}


      {/* <div className='list'>
        <h4>{ 글제목[0] } <span onClick={()=>{ 따봉변경(따봉+1) }}>👍</span> { 따봉 } </h4>
        <h4>{ 글제목[0] } <span onClick={ 함수 }>👍</span> { 따봉 } </h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4>{ 글제목[1] }</h4>
        <p>2월 17일</p>
      </div>
      <div className='list'>
        <h4 onClick={()=>{ setModal(!modal)}}>{ 글제목[2] }(모달창)</h4>
        <p>2월 17일</p>
      </div> */}      

      {
        글제목.map(function(a, i){
          return (
            <div className='list' key={i}>
              <h4>
                <span onClick={()=>{ setModal(!modal)}}>{ 글제목[i] }</span> 
                <span onClick={()=>{ 
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                }} className='bong'>👍</span> { 따봉[i] }
              </h4>
              <p>2월 17일</p>
            </div>
          )
        })
      }

      {
        // 삼항연산자(ternary operator) : if문 대신 사용
        // 조건식 ? 참일때 실행할 코드 : 거짓일 때 실행할 코드
        modal == true ? <Modal></Modal> : null   //null은 비어있는 html용으로 자주 사용
        // modal == true ? <Modal></Modal> : modal == false ? <Modal></Modal> : null
      }

      { 어레이 }

      
    </div>
  );
}


//강의내용 - 자식이 부모의 state 가져다쓰고 싶을 때는 props


// 컴포넌트 만드는법
// 1. function 맨 하단에 만들고 작명(작명은 영문 대문자로 시작)
// 2. return()안에 html 담기
// 3. <함수명></함수명>쓰기
// <></> 플래그먼트 문법 : 의미없는 div 대신 사용

// 컴포넌트 언제 만드는게 좋은가?
// 1. 반복적인 html 축약할때
// 2. 큰 페이지들
// 3. 자주 변경되는 html ui 것들


// let Modal = () => {
//   return {
//     <div></div>
//   }
// } 함수처럼 사용하는 컴포넌트

function Modal() {
  return (
    <>
      <div className='modal'>
        <h4>제목</h4>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
    </>
  )
}

export default App;