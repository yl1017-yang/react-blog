//wraning 무시  /* eslint-disable */

import { useState } from 'react';
import './App.css';

function App() {
  
  let [글제목, 글제목변경] = useState(['남자 코트 추천', '강남 우동 맛집', '파이썬 독학']);
  let [따봉, 따봉변경] = useState([0, 0, 0]);
  let [modal, setModal] = useState(false);
  let [title, setTitle] = useState(0);
  let [입력값, 입력값변경] = useState('');
  const date = new Date();

  const HandleOnChange = (e) => {
    if (입력값변경(e.target.value).trim() == "") {
      입력값변경(e.target.value).val('');
 	    return false;
    }
  }

  return (
    <div className="App">
      <div className='black-nav'>
        <h4>블로그</h4>
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

      
      {/* <input onChange={(e)=>{ 
        입력값변경(e.target.value);
      }} /> */}
      <input onChange={HandleOnChange} value={입력값} />

      <button onClick={(e)=>{
        글제목변경(e.target.value);
        // 글제목변경([...글제목, 입력값]);
        let copy = [...글제목];
        copy.unshift(입력값);  // array자료 맨 앞에 자료추가하는 문법
        글제목변경(copy);
      }}>글발행</button>

      <button onClick={()=>{
        입력값변경('');
      }}>초기화</button>

      <p>input vlue: {입력값}</p>
      

      {/* 
        <input>에 뭔가 입력시 코드 실행하고 싶으면 onChange / onInput 
        e -> 지금 발생하는 이벤트에 관련한 여러 기능이 담겨있음
        이벤트 상위태그까지 먹는걸 이벤트 버블링이라고 함
        state 변경된 함수는 늦게처리됨 (전문용어로 비동기처리)
        array 자료 추가하는 법 
      */}


      {
        modal == true 
        ? <Modal title={title} 글제목변경={글제목변경} 글제목={글제목}></Modal> 
        : null
      }
      
      
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
      </div>
    </>
  )
}



//강의내용 - input 다루기 2 : 블로그 글발행 기능 만들기



export default App;