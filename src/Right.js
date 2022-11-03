import image1 from "../avatar-michelle.jpg";
import image2 from "../icon-share.svg";
import image3 from "../icon-facebook.svg";
import image4 from "../icon-pinterest.svg";
import image5 from "../icon-twitter.svg";
import "./Right.css";
import { useState } from "react";
export default function Right() {
  const [value, setValue] = useState(false);
  const showComp = () => {
    setValue((prevValue) => !prevValue);
  };
  const html = (
    <div className="box">
      <h1>SHARE</h1>
      <div className="all">
        <img className="icon" src={image3} alt="facebook" />
        <img className="icon" src={image4} alt="pinterst" />
        <img className="icon" src={image5} alt="twitter" />
      </div>
    </div>
  );
  return (
    <div className="right">
      <div className="text">
        <h1>
          Shift the Overall look and feel by adding these wonderful touches to
          furniture in your home{" "}
        </h1>

        <p>
          Perhaps it felt slightly bare and uninviting. I've got some simple
          tips to help you make any room feel complete.
        </p>
      </div>
      <div className="bottom">
        <div className="image">
          <img className="image1" src={image1} alt="person" />
        </div>
        <div className="title">
          <h1>Michelle Appleton</h1>
          <h3>28 Jun 2020</h3>
        </div>
        {value && html}
        <button onClick={showComp}>
          <img className="image2" src={image2} alt="share" />
        </button>
      </div>
    </div>
  );
}
