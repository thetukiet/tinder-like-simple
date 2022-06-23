import React,{ useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import Constants from '../Constants';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

function TinderCards() {
    const [pepoles,setPepoles] = useState([]);

    const calcAge = (dateOfBirth) => {
        var today = new Date();
        var birthDate = new Date(dateOfBirth.replace('/','-'));
        var age = today.getFullYear() - birthDate.getFullYear();
        var m = today.getMonth() - birthDate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    };

    const onPass = (person) => {
        alert(person);
    };
    const onLike = (person) => {
        alert(person.id);
    };

    useEffect(()=>{
        fetch(Constants.USERS_URL)
        .then(response=>response.json())
        .then(results=>setPepoles(results))
    },[])
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
