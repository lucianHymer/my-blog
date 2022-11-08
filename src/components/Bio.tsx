import { useState } from "react";
import twitter from "../assets/twitter.png";
import discord from "../assets/discord.svg";
import linkedin from "../assets/linkedin.png";
import substack from "../assets/substack.png";
import headshot from "../assets/headshot.png";
//import "./Bio.css";

interface IconLinkProps {
  icon: string;
  url: string;
  text: string;
}

function IconLink(props: IconLinkProps) {
  const { icon, url, text } = props;

  return (
    <a href={url} target="_blank" className="smallIcon">
      <img src={icon} className="smallIcon" alt={text} title={text} />
    </a>
  );
}

function Bio() {
  return (
    <>
      <img className="headshot" src={headshot} />
      <div>
        <div>
          <p>Lucian is a computer engineer and techno-optimist</p>
        </div>
        <div>
          <div className="flexSpaceEvenly">
            <div>
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
            </div>
            <div>
              <h2>Blog</h2>
              <div className="flexCenter">
                <IconLink
                  icon={substack}
                  url="https://lucianhymer.substack.com/"
                  text="Substack"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Bio;
