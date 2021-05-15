import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  let [ 글제목, 글제목변경 ] = useState(['남자봄패션 코디','서촌나들이','패턴이 바꼈다']); //array 가 들어감
  let [ 따봉, 따봉변경 ] = useState( [0,0,0,0] );
  let [modal, modal변경] = useState(false);
  let [누른제목, 누른제목변경] = useState(0);
  function 제목바꾸기(){//state를 딥카피해서 변경-reference data type참조형 자료형
    var newArray = [...글제목]; //deep copy =서로 독립적인 값을 가지는것을 복사  직접 수정이 아닌 deep copy
    newArray[0] = '여자봄패션 코디';
    글제목변경( newArray );

  }

  function 순서바꾸기(){//state를 딥카피해서 변경-reference data type참조형 자료형
    var newArray = [...글제목]; //deep copy =서로 독립적인 값을 가지는것을 복사  직접 수정이 아닌 deep copy
    var tmp = newArray[0]
    newArray[0] = newArray[1];
    newArray[1] = tmp;
    글제목변경( newArray );

  }

  return (
    <div className="App">

      <div className="black-nav">
        <div>개발 Blog</div>
      </div>

      <button onClick={ 제목바꾸기 }>버튼</button>
      <button onClick={ 순서바꾸기 }>버튼</button>


      <div className="list">
        <h4>{ 글제목[0] }
        <span onClick={ ()=>{따봉변경(따봉+1)} }> ❤️ </span> { 따봉 }
        </h4>
        <p>5월 11일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4>{ 글제목[1] }</h4>
        <p>5월 10일 발행</p>
        <hr/>
      </div>
      <div className="list">
        <h4 onClick={ ()=>{ modal변경(true) } }> { 글제목[2] } </h4>
        <p onClick={ ()=>{ modal변경(true) } }>5월 9일 발행</p>
        { 
         modal === true 
         ? <Modal />
         : null
        }
        <hr/>
      </div>


        {
          글제목.map(function(i){
            return (
              <div className="list">
                <h4>{ i } <span onClick={ ()=>{따봉변경(따봉+1)} }> ❤️ </span> { 따봉 }</h4>
                <p>5월 10일 발행</p>
                <hr/>
              </div>
          )})
        }














      <button onClick={ ()=>{ modal변경(!modal) } }> 모달 </button>
      { 
         modal === true 
         ? <Modal />
         : null
      }
    </div> 
  );
}
 
function Modal(){//componant
  return(
    <div className="modal">
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
    </div>
  )
}


export default App;
