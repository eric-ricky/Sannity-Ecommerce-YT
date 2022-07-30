import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

interface IFooter {}

const Footer: React.FC<IFooter> = () => {
  return (
    <div className="footer-container">
      <p>2022 Phonnix All rights reserverd</p>
      <p className="icons">
        <AiFillInstagram />
        <AiOutlineTwitter />
      </p>
    </div>
  );
};

export default Footer;
