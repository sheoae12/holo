import './Home.css';
import React from 'react';
import { Link } from 'react-router-dom';
import {images} from '../images';

function Home() {

  return (
    <div>
        <div className="homeHeaderBar">
            <img src={images.logo} alt="Logo"/>
            <Link className="linkMenuButton" to='/infoboard'>
                <button>알아가요</button>
            </Link>
            <button>같이해요</button>
            <button>궁금해요</button>
        </div>
        <div className="home"></div>
    </div>
  );
}

export default Home;