//wraning 무시  /* eslint-disable */


import * as React from 'react'; //리액트 옛날문구 사용시 import
import { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  const date = new Date();

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>리액트 블로그 https://yl1017-yang.github.io/react-blog/</h4>
      </div>
      

      <button onClick={()=>{
        let copy = [...글제목];
        copy[0] = '● 여자 코트 추천';
        글제목변경(copy);
      }}>글수정</button>

      <button onClick={()=>{
        let copy = [...글제목];
        copy.sort();
        글제목변경(copy);
      }}>가나다순 정렬</button>

      {
        글제목.map(function(a, i) {
          return (
            <div className='list' key={i}>
              <h4>
                <span onClick={()=> { setModal(!modal); setTitle(i) }}>{ 글제목[i] }</span>

                <span onClick={(e)=> { 
                  e.stopPropagation();
                  let copy = [...따봉];
                  copy[i] = copy[i] + 1;
                  따봉변경(copy);
                 }} className='bong'>👍
                </span> { 따봉[i] }

                <button onClick={()=>{
                let copy = [...글제목];
                copy.splice(i, 1);
                글제목변경(copy);
                }}>글삭제</button>
              </h4>

              <p>{ date.toLocaleDateString() }</p>
            </div>
          )
        })
      }

      
      <input placeholder="글 제목을 입력하세요" onChange={(e)=>{ 
        입력값변경(e.target.value);
      }} value={입력값} />

      {/* 공백입력방지- https://velog.io/@dbqls6365/React-%EB%B8%94%EB%A1%9C%EA%B7%B8-%EC%A0%9C%EC%9E%914-%EA%B3%B5%EB%B0%B1-%EC%9E%85%EB%A0%A5-%EB%B0%A9%EC%A7%80%ED%95%98%EA%B8%B0 */}
      <button onClick={(e)=>{
        // if (입력값.length === 0){
        if (!입력값.length){
          alert('글 제목을 입력하세요');
          return false;
        }
        else {
          글제목변경(e.target.value);
          // 글제목변경([...글제목, 입력값]);
          let copy = [...글제목];
          copy.unshift(입력값);  // array자료 맨 앞에 자료추가하는 문법
          글제목변경(copy);
        }
      }}>글등록</button>

      <button onClick={()=>{
        입력값변경('');
      }}>초기화</button>

      {/* <p>input vlue: {입력값}</p> */}
      

      {/* 
        <input>에 뭔가 입력시 코드 실행하고 싶으면 onChange / onInput 
        e -> 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있음
        이벤트 상위태그까지 먹는걸 이벤트 버블링이라고 함
        state 변경된 함수는 늦게처리됨 (전문용어로 비동기처리)
        array 자료 추가하는 법 
      */}


      {
        modal == true 
        ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목} setModal={setModal}></Modal> 
        : null
      }
      
      <Modal2></Modal2>

    </div>
  );
}


function Modal(props) {
  return (
    <>
      <div className='modal' >
        <h4>{ props.글제목[props.title] }</h4>
        <p>날짜</p>
        <p>상세내용</p>

        <button onClick={()=>{
          let copy = [...props.글제목];
          copy[0] = ['-글제목 변경'];
          props.글제목변경(copy);
        }}>글수정</button>

        <button onClick={()=>{ 
          props.setModal(false);
        }}>창닫기</button>
      </div>
    </>
  )
}


// class 문법으로 컴포넌트 만들기 : 예전 스타일
class Modal2 extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      name : 'kim',
      age : 20
    }
  }

  render(){
    return (
      <div>
        안녕 {this.state.age}
        <button onClick={()=>{
          this.setState({age : 21})
        }}>버튼</button>
      </div>
    )
  }
}


//강의내용 - input 다루기 2 : 블로그 글발행 기능 만들기
// 리액트 git 배포 : https://velog.io/@bami/React-GitHub-Pages에-배포하기



export default App;