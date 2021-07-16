import React, { useState } from "react";
import './SocialFollow.css'
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faYoutube,
  faFacebook,
  faTwitter
} from "@fortawesome/free-brands-svg-icons";

export default function SocialFollow(props) {
    const [info, setInfo] = useState({});
    // console.log(props.info);
    const {strFacebook, strTwitter, strYoutube} = props.info;
    
    
  return (
    <div className="social-container">
      <h3 className="font-color">@SocialMedia</h3>
      <a
        href={'https://'+strYoutube}
        className="youtube social"
      >
        <FontAwesomeIcon icon={faYoutube} size="2x" />
      </a>
      <a
        href={'https://'+strFacebook}
        className="facebook social"
      >
        <FontAwesomeIcon icon={faFacebook} size="2x" />
      </a>
      <a href={'https://'+strTwitter} className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="2x" />
      </a>
     
    </div>
  );
}
