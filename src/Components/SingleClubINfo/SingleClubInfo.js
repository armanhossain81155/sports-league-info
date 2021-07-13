import React, { useEffect, useState } from 'react';
import './SingleClubInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast,faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';
import facebook from '../../images/fb.png'
import twitter from '../../images/twitter.png'
import youtube from '../../images/youtube.png'

import { useParams } from 'react-router-dom';





const SingleClubInfo = () => {
      
       const {idLeague} = useParams();
      
        const [info, setInfo] = useState({});
        console.log(info);
        useEffect(()=>{
                let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
                fetch(url)
                .then(res => res.json())
                .then(data => setInfo(data.leagues[0]))
        },[idLeague])
       
    return (
        <div className="for-bg">
                <div className="info-page">
                                <img className="info-page-img" src={info.strLogo} alt="" />
                        </div>
                <div className="another1-part">
                <div className="container another-part">
                        
            
                        <Container className="second-part">
                               
                                <Row>
                                    <Col className="mid-part" >
                                            <h4>{info.strLeague}</h4>
                                            <h6><FontAwesomeIcon icon={faPodcast} /> Founded:{info.intFormedYear}</h6>
                                            <h6> <FontAwesomeIcon icon={faFlag} /> Country:{info.strCountry}</h6>
                                            <h6><FontAwesomeIcon icon={faFutbol} /> Sports Type:{info.strSport}</h6>
                                            <h6> <FontAwesomeIcon icon={faVenusMars} /> Gender: {info.strGender}</h6>
                                            <h6>League id: {idLeague} </h6>
                                    </Col>
                                    <Col  >
                                            <img className="singleinfo-image" src={info.strFanart3} alt="" />
                                    </Col>
                                </Row>
                                
             
                        </Container>
                       <div className="text-area2">
                                 <p>
                                         {info.strDescriptionEN}
                                </p>
                              
                       </div>
                       <div className="social-div">
                                       <a href={info.strFacebook}> <img className="social-logo-part1" src={facebook} alt="" /></a>
                                        <a href={info.strTwitter}><img className="social-logo-part2" src={twitter} alt="" /></a>
                                        <a href={info.strYoutube}><img className="social-logo-part3" src={youtube} alt="" /></a>
            
                                </div>
                    </div>
                </div>
        </div>
    );
};

export default SingleClubInfo;