import React, { useEffect, useState } from 'react';

import banner from '../../images/banner.jpg'
import '../Home/Home.css'
import League from '../League/League';





const Home = () => {
    const [leagues, setLeagues] = useState([])
    
    
    
    
    
    useEffect(() => {
        const url = `https://www.thesportsdb.com/api/v1/json/1/all_leagues.php`
        fetch(url)
        .then(res => res.json())
        .then(data => setLeagues(data.leagues.slice(0,150)))
       
        

        
    }, [])
    
    return (
         
        <div>
            <img className="main-banner" src={banner} alt="" />
        

        <div className = " main-home">
            
            
            {
                leagues.map( league => <League  league={league}></League>)
            }
           
          
            
            
        </div>
        </div>
    );
};

export default Home;