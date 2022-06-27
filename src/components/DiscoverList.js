import React,{ useState, useEffect } from 'react'
import TinderCard from 'react-tinder-card'
import Urls from '../Urls';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';
import calcAge from '../utils/DateUtils';

function DiscoverList() {
    const [pepoles,setPepoles] = useState([]);
    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const postData = (url, data) =>{
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                // TODO: show notification(success/error)
                console.log(data);
            } );
    };

    const onPass = async (people) => {
        postData(Urls.PASS_URL, people);
        await doSlide(people, 'left');
    };

    const onLike = async (people) => {
        postData(Urls.LIKE_URL, people);
        await doSlide(people, 'right');
    };

    const updatePeopleList = async (id) => {
        var currentList = pepoles;
        const index = currentList.findIndex(a => a.id === id);
        if (index === -1) return;
        currentList.splice(index, 1);
        await setPepoles([...currentList]);
        // TODO: call API to get more people profiles
    };

    const onSwipe = async (people) => {
        if(people){
            await updatePeopleList(people.id);
        }
    }

    const doSlide = async (people, direction) => {
        if(people){
            var element = document.getElementById(people.id);
            if(!element){
                alert('aaaa');
            }
            var slideDirectionClass = direction === 'left' ? 'slideLeft' : 'slideRight'
            element.parentElement.classList.add("slideShow");
            element.parentElement.classList.add(slideDirectionClass);
            await sleep(700);
            await updatePeopleList(people.id);
        }
    }

    useEffect(()=>{
        fetch(Urls.USERS_URL)
        .then(response=>response.json())
        .then(results=>setPepoles(results))
    },[])

    return(
        <div className="tinderCards_container">
            {
                pepoles.map((people)=>(
                    <TinderCard 
                        onCardLeftScreen={() => onSwipe(people)}
                        className="swipe"
                        key={people.id}
                        preventSwipe={["up", "down"]}
                    >
                        <div id={people.id} style={{
                            backgroundImage:`url(${people.picture})`}}
                            className="card">
                        </div>
                        
                        <div className='card-info'>
                            {people.firstName + " " + people.lastName} - {calcAge(people.dateOfBirth)}

                            <div className="card-buttons">
                                <IconButton onClick={() => onPass(people)}>
                                    <CloseIcon className="close-btn" fontSize="large"/>
                                </IconButton>
                                <IconButton onClick={() => onLike(people)}>
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

export default DiscoverList
