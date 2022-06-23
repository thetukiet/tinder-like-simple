import React,{ useState, useEffect } from 'react'
import Constants from '../Constants';
import {motion, MotionConfig} from "framer-motion";

function PassList() {
    const [passPeoples, setPassPeoples] = useState([]);


    // Read saved data
    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(Constants.PASS_PEOPLES_KEY));
        if (data) {
            setPassPeoples(data);
        }
    }, []);

    return (
        <div className='pass-list-container'>
        <div className="img-grid">
            {
                passPeoples.map((person)=>(
                    <motion.div
                        layout
                        whileHover={{opacity: 1}}
                        className="img-wrap"
                        key={person.id}
                        onClick={() => {}}
                    >
                        <motion.img
                        src={person.picture}
                        initial={{opacity: 0}}
                        animate={{opacity: 1}}
                        transition={{delay: 1}}
                        />
                    </motion.div>
                    
                ))
            }
        </div>
        </div>
    )
}

export default PassList
