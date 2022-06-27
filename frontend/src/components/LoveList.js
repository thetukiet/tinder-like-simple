import React,{ useState, useEffect } from 'react'
import Urls from '../Urls';
import {motion, MotionConfig} from "framer-motion";
import calcAge from '../utils/DateUtils';

function TinderCards() {
    const [lovePeoples, setLovePeoples] = useState([]);

    useEffect(() => {
        fetch(Urls.LIKED_USERS_URL)
        .then(response=>response.json())
        .then(results=>setLovePeoples(results))
    }, []);

    if(lovePeoples.length > 0){
        return (
            <div className='list-container'>
                <div className="img-grid">
                    {
                        lovePeoples.map((people)=>(
                            <motion.div
                                layout
                                whileHover={{opacity: 1}}
                                className="img-wrap"
                                key={people.id}
                                onClick={() => {}}
                            >
                                <motion.img
                                    src={people.picture}
                                    initial={{opacity: 0}}
                                    animate={{opacity: 1}}
                                    transition={{delay: 0}}
                                />
                                <div className='cell-info'>
                                    {people.firstName + " " + people.lastName} - {calcAge(people.dateOfBirth)}
                                </div>
                            </motion.div>
                            
                        ))
                    }
                </div>
            </div>
        );
    }else{
        return (
            <div className='list-container' style={{backgroundColor:"#dedede"}}>
                <div className='no-content'>Liked profiles list is empty</div>
            </div>
        );
    }
}

export default TinderCards
