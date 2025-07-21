import React, { useRef, useState } from 'react';
import './TicTacToe.css';
import circle_icon from '../Assets/circle.png';
import cross_icon from '../Assets/cross.png';

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  let [count, setCount] = useState(0);
  let [lock, setLock] = useState(false);
  let titleRef = useRef(null);

  let box1 = useRef(null);
  let box2 = useRef(null);  
  let box3 = useRef(null);
  let box4 = useRef(null);
  let box5 = useRef(null);
  let box6 = useRef(null);
  let box7 = useRef(null);
  let box8 = useRef(null);
  let box9 = useRef(null);
  let box_array = [box1,box2,box3,box4,box5,box6,box7,box8,box9];
  const toggle = (e, num) => {
    if (lock) return;

    if (data[num] !== "") return; // prevent overwriting

    if (count % 2 === 0) {
      e.target.innerHTML = `<img src='${cross_icon}' alt="X"/>`;
      data[num] = "x";
    } else {
      e.target.innerHTML = `<img src='${circle_icon}' alt="O"/>`;
      data[num] = "o";
    }

    setCount(count + 1);
    checkWin();
  };
  const checkWin = ()=>{

    if(data[0]===data[1] && data[1]===data[2] && data[2]!=""){
        won(data[2]);
    }else if(data[3]===data[4] && data[4]===data[5] && data[5]!=""){
        won(data[5]);
    }else if(data[6]===data[7] && data[7]===data[8] && data[8]!=""){
        won(data[8]);
    }else if(data[0]===data[3] && data[3]===data[6] && data[6]!=""){
        won(data[6]);
    }else if(data[1]===data[4] && data[4]===data[7] && data[7]!=""){
        won(data[7]);
    }else if(data[2]===data[5] && data[5]===data[9] && data[9]!=""){
        won(data[9]);
    }else if(data[0]===data[4] && data[4]===data[8] && data[8]!=""){
        won(data[8]);
    }else if(data[0]===data[1] && data[1]===data[2] && data[2]!=""){
        won(data[2]);
    }else if(data[2]===data[4] && data[4]===data[6] && data[6]!=""){
        won(data[6]);
    }
  }
  const won = (winner)=> {
    setLock(true);
    if (winner === "x"){
        titleRef.current.innerHTML = `congratulation:<img src='${cross_icon}' alt="X"/>Win`;
    }else{
        titleRef.current.innerHTML = `congratulation:<img src='${circle_icon}' alt="o"/>Win`;
    }
  }

  const reset = ()=> {
    setLock(false);
    data = ["", "", "", "", "", "", "", "", ""];
    titleRef.current.innerHTML =  `Tic Tac Toe In <span>React</span>`;  
    box_array.map((e)=> {
        e.current.innerHTML = "";
    })    
  }
  return (
    <div className='container'>
      <h1 className='title' ref={titleRef}>Tic Tac Toe Game In <span>React</span></h1>
      <div className="board">
            {[0, 1, 2].map((row) => (
            <div className={`row${row + 1}`} key={row}>
                {[0, 1, 2].map((col) => {
                const idx = row * 3 + col;
                const refs = [box1, box2, box3, box4, box5, box6, box7, box8, box9];
                return (
                    <div
                    key={idx}
                    className="boxes"
                    ref={refs[idx]}
                    onClick={(e) => toggle(e, idx)}
                    ></div>
                );
                })}
            </div>
            ))}
        </div>
      <button className="reset" onClick={()=>reset()}>Reset</button>
    </div>
  );
};

export default TicTacToe;