import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../images/tech-background.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1> Welcome to ThinkTesting!</h1>
        <p> Empower Your Mind & Learn about Testing! </p>
        <Link to="/about">
          <button> LEARN MORE </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;