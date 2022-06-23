import React,{ useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import Constants from '../Constants';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

function TinderCards() {
    const [pepoles,setPepoles] = useState([]);

    const loadContent = (tag) => {
       
    };

    const showLoveList = () => {
        alert(person);
    };
    const showPassList = () => {
        alert(person.id);
    };
    const showCardsList = () => {
        alert(person.id);
    };

  
    return (
            <div className="tinderCards_container">
                {
                    pepoles.map((person)=>(
                        <TinderCard 
                            className="swipe"
                            key={person.id}
                            id={person.id}
                            preventSwipe={["up", "down"]}
                        >
                            <div style={{
                                backgroundImage:`url(${person.picture})`}}
                                className="card">
                            </div>
                            
                            <div className='card-info'>
                                {person.firstName + " " + person.lastName} - {calcAge(person.dateOfBirth)}

                                <div className="card-buttons">
                                    <IconButton onClick={() => onPass(person)}>
                                        <CloseIcon className="close-btn" fontSize="large"/>
                                    </IconButton>
                                    <IconButton onClick={() => onLike(person)}>
                                        <FavoriteIcon className="favirate-btn" fontSize="large"/>
                                </IconButton>
                                </div>
                            </div>
                        </TinderCard>
                       
                    ))
                }
            </div>
    )
}

export default TinderCards
