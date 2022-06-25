import React,{ useState, useEffect } from 'react'
import Constants from '../Constants';
import calcAge from '../utils/DateUtils';

function PassList() {
    const [passPeoples, setPassPeoples] = useState([]);

    useEffect(() => {
        const data = JSON.parse(localStorage.getItem(Constants.PASS_PEOPLES_KEY));
        if (data) {
            setPassPeoples(data);
        }
    }, []);

    if(passPeoples.length > 0){
        return (
            <div className='list-container' style={{backgroundColor:"white", padding:"10px"}}>
                <div className="pass-grid">
                    {
                        passPeoples.map((people)=>(
                        <> 
                            <div><img src={people.picture}></img></div>
                            <div><p> {people.firstName + " " + people.lastName}</p></div>
                            <div><p>{calcAge(people.dateOfBirth)}</p></div>
                        </>
                        ))
                    }
                </div>
            </div>
        );
    }else{
        return (
            <div className='list-container' style={{backgroundColor:"#dedede"}}>
                <div className='no-content'>Passed profiles list is empty</div>
            </div>
        );
    }
}

export default PassList