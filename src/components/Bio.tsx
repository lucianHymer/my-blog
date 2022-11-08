import { useState } from "react";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.png";
import substack from "../assets/substack.png";
//import "./Bio.css";

function IconLink(props) {
  const { icon, url, text } = props;

  return (
    <a href={url} target="_blank" className="smallIcon">
      <img src={icon} className="smallIcon" alt={text} title={text} />
    </a>
  );
}

function Bio() {
  return (
    <div className="card">
      <p>Lucian is a computer engineer and techno-optimist</p>
      <h2>Contact</h2>
      <div className="flexCenter">
        <IconLink
          icon={twitter}
          url="https://twitter.com/lucianHymer"
          text="Twitter"
        />
        <IconLink
          icon={linkedin}
          url="https://www.linkedin.com/in/lucian-hymer/"
          text="LinkedIn"
        />
        <IconLink
          icon={discord}
          url="https://discordapp.com/users/964361147371360286"
          text="Discord"
        />
      </div>
      <h2>Blog</h2>
      <div className="flexCenter">
        <IconLink
          icon={substack}
          url="https://lucianhymer.substack.com/"
          text="Substack"
        />
      </div>
    </div>
  );
}

export default Bio;
