import { useState } from "react";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.png";
//import "./Bio.css";

function IconLink(props) {
  const { icon, url, text } = props;

  return (
    <a href="" className="smallIcon">
      <img src={twitter} className="smallIcon" />
    </a>
  );
}

function Bio() {
  return (
    <div className="card">
      <p>Lucian is a computer engineer and techno-optimist</p>
      <p>More info coming soon...</p>
      <div className="flex">
        <IconLink src={twitter} />
      </div>
    </div>
  );
}

export default Bio;
