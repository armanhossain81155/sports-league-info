import React, { useEffect, useState } from 'react';
import './SingleClubInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPodcast,faFlag, faFutbol, faVenusMars } from '@fortawesome/free-solid-svg-icons'
import { Container, Row, Col } from 'react-bootstrap';

import male from '../../images/male.png'
import female from '../../images/female.png'
import { useParams } from 'react-router-dom';
import SocialFollow from '../SocialFollow/SocialFollow';






const SingleClubInfo = () => {
      
       const {idLeague} = useParams();
      
        const [info, setInfo] = useState({});
        // console.log(info);
        useEffect(()=>{
                let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
                fetch(url)
                .then(res => res.json())
                .then(data => setInfo(data.leagues[0]))
        },[idLeague])

        let Gender = (info.strGender);
        
      
        
       
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
                                            
                                    </Col>
                                    <Col  >
                                            {
                                                    Gender==="Male" ? <img className="singleinfo-image" src={male} alt="" />
                                                    : <img className="singleinfo-image" src={female} alt="" />
                                            }
                                    </Col>
                                </Row>
                                
             
                        </Container>
                       <div className="text-area2">
                                 <p>
                                         {info.strDescriptionEN}
                                </p>
                              
                       </div>
                   <div className="total-social">
                   <SocialFollow  info={info}></SocialFollow>
                   </div>
                    </div>
                </div>
        </div>
    );
};

export default SingleClubInfo;