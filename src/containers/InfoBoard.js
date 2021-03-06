import './Board.css';
import React, {useState} from 'react';
import { Link } from 'react-router-dom';
import {images} from '../images';
import { AiOutlineSearch, AiOutlinePlus } from "react-icons/ai";
import BoardTable from '../components/BoardTable';
import Pagination from '../components/Pagination';

const policyList = [
  {
    id: 1,
    title: "๐ฅ 1์ธ ๊ฐ๊ตฌ ๋ง์ถคํ ์ฃผ๊ฑฐ์๋ด์",
    date: "2022-03-17",
    writer: "์ ๋ฆฌ ์ต๊ณ ",
    view: "256",
    like: "50"
  },
  {
    id: 2,
    title: "๐ฅ 1์ธ ๊ฐ๊ตฌ๋ฅผ ์ํ ์ด๋ฒคํธ",
    date: "2022-04-06",
    writer: "๋ผ์ด์ธ",
    view: "100",
    like: "12"
  },
  {
    id: 3,
    title: "๐ฅ ์ค๋งํธ ํ๋ฌ๊ทธ ์ง์ ์ฌ์",
    date: "2022-09-04",
    writer: "๋๋ผ๋ฏธ",
    view: "200",
    like: "150"
  },
  {
    id: 4,
    title: "๋ํ์ ์๋์ฃผํ ๊ณต๊ธ ๋ฐ ์ง์",
    date: "2022-06-17",
    writer: "๋๋ผ๋ฏธ",
    view: "20",
    like: "2"
  },
  {
    id: 5,
    title: "๋ณด๋์ผ์๋ฆฌ์ฌ์ 1์ธ๊ฐ๊ตฌ ์๋ดํฌํผ ๋ชจ์ง",
    date: "2021-11-21",
    writer: "์ ์ฑ๊ณต์ ๋ด",
    view: "78",
    like: "6"
  },
  {
    id: 6,
    title: "1์ธ ๊ฐ๊ตฌ ์ ์ฑ ๋ชจ์",
    date: "2022-01-16",
    writer: "์ ์ฑ๊ณต์ ๋ด",
    view: "216",
    like: "112"
  },
  {
    id: 7,
    title: "1์ธ ๊ฐ๊ตฌ ์ ๋ฆฌ ์๋ฉ ์ปจ์คํ",
    date: "2022-09-04",
    writer: "์ฐ๋ค",
    view: "18",
    like: "3"
  }
]
const infoList = [
  {
    id: 1,
    title: "๐ฅ ์์ ๋ฒ๋  ๋ฐฉ์งํ๊ธฐ",
    date: "2022-03-15",
    writer: "๊ทค๊ทค์ด",
    view: "240",
    like: "96"
  },
  {
    id: 2,
    title: "๐ฅ ์ํ ๋ณด๊ดํ๋ ๊ฟํ!",
    date: "2022-01-23",
    writer: "์ฐ๋ค",
    view: "248",
    like: "135"
  },
  {
    id: 3,
    title: "๐ฅ ๋ผ์ง๊ณ ๊ธฐ ์ก๋์ ์์ ๋ ๋ฐฉ๋ฒ ๊ณต์ ํด์",
    date: "2022-04-11",
    writer: "์",
    view: "13",
    like: "1"
  },
  {
    id: 4,
    title: "ํ ๋๋น ์ธ์ฒํ๋ ๋ฐฉ๋ฒ์ด์์ฉ",
    date: "2022-02-12",
    writer: "์",
    view: "20",
    like: "2"
  },
  {
    id: 5,
    title: "์ฒญ์ํ ๋ ์ ์ฉํ ๊ฟํ TOP 15",
    date: "2021-12-25",
    writer: "์ฐ๋ค",
    view: "136",
    like: "42"
  },
  {
    id: 6,
    title: "์์ ๊ฝ ์๋ค์ง ์๊ฒ ํ๋ ๋ฒ!",
    date: "2022-02-02",
    writer: "๋จผ์ง์ ์",
    view: "32",
    like: "21"
  },
  {
    id: 7,
    title: "๋ถ๋ฆฌ์๊ฑฐ๋ ์ด๋ ๊ฒ ํฉ์๋ค!",
    date: "2022-01-03",
    writer: "๋จผ์ง์ ์",
    view: "18",
    like: "3"
  }
]

function search(){
  console.log("๊ฒ์")
}

function ShowBoard() {
  const [select, setSelect] = useState("left")
  
  return (
    <div>
      <div className="boardHeaderBar">
        <div></div>
        <img src={images.logo} alt="Logo"/>
        <Link className="linkSearchButton" to={select === "left" ? '/policysearch' : '/documentsearch'}>
          <button onClick={search}>
            <AiOutlineSearch className="moveSearchImg"/>
          </button>
        </Link>
      </div>
      <div className="boardButtonBar">
        <button className="leftButton" onClick={() => setSelect("left")}>์ ์ฑ</button>
        <button className="rightButton" onClick={() => setSelect("right")}>์ํ๋ฐฑ์</button>
      </div>
      <div className={`board ${select === "left" ? 'left' : 'right'}`}>
        <div className="boardTable">
          <div><BoardTable list={select === "left" ? policyList : infoList}></BoardTable></div>
        </div>
        <Link to='/write'>
          <button className="moveWriteButton">
            <AiOutlinePlus className="moveWriteImg"/>
          </button>
        </Link>
        <div className="boardPagination">
          <div><Pagination></Pagination></div>
        </div>
      </div>
    </div>
  );
}


class Board extends React.Component {
  render() {
    return(
      <ShowBoard/>
    );
  }
}
export default Board;