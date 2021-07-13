import { Button } from 'react-bootstrap';
import React, {  useContext, useEffect, useState } from 'react';
import { Card } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowAltCircleRight } from '@fortawesome/free-solid-svg-icons'
import './League.css'
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';






const League = (props) => {
    const {strLeague,strSport,idLeague} =props.league;
    const [images, setImages] = useState({})
    const [content, setContent] = useContext(UserContext);
    // console.log(content)
    
    
    useEffect(() => {
        let url = `https://www.thesportsdb.com/api/v1/json/1/lookupleague.php?id=${idLeague}`
    fetch(url)
    .then(res => res.json())
    .then(data => {setImages(data.leagues[0])
      setContent(data.leagues[0])
    })
    },[idLeague, setContent])
    // console.log(images);
      
    return (
      
        <div className="container cont-div">
            <Card className="main-card" style={{ width: '18rem' }}>
   <div className="main-img">
   <Card.Img  variant="top" src={images.strBadge} />
   </div>
  <Card.Body>
    <div className="name-space">
    <Card.Title>{strLeague}</Card.Title>
    </div>
    <Card.Text>
      Sports Type : <small>{strSport}</small>
    </Card.Text>
    <Card.Text>
      League Id : {idLeague}
    </Card.Text>
    <Link to={idLeague}><Button variant="warning">Explore<FontAwesomeIcon icon={faArrowAltCircleRight} /></Button></Link>
  </Card.Body>
</Card>
  
        </div>
          
    );
};

export default League;