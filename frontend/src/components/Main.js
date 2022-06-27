import React,{ useState, useEffect } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import BackspaceIcon from '@mui/icons-material/Backspace';
import PassList from './PassList';
import LoveList from './LoveList';
import DiscoverList from './DiscoverList';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { withStyles } from '@material-ui/core/styles';

function Main() {
    const [valueTab, setTab] = useState(1);
    const handleChangeTab= (event, value) => {
        setTab(value);
    }

    const CustomTab = withStyles({
        root: {
            minWidth:"33.33%",
            color:"black",
            minHeight:"50px",
            backgroundColor: 'white',
        },
        selected: {
            backgroundColor: '#efefd0',
        },
        
      })(Tab);

    return (
        <div className='main-content'>
            <div className='display-component'>
                { valueTab == 0 &&
                    <PassList />
                }
                { valueTab == 1 &&
                    <DiscoverList />
                }
                { valueTab == 2 &&
                    <LoveList />
                }
            </div>
            <Tabs
                justify="center"
                value={valueTab}
                textColor="inherit"
                onChange={ handleChangeTab }
                TabIndicatorProps={{style: {backgroundColor: "#fb8500", height:"5px"}}}
                classes={{ root: "wrapper-tabs container", flexContainer: "tabs" }}
            >
                <CustomTab icon={
                    <BackspaceIcon className="close-btn" fontSize="medium" color='blue' sx={{color:"#ef233c"}}/>
                } iconPosition="start" label="Passed"/>
                <CustomTab icon={
                    <FavoriteIcon className="favirate-btn" fontSize="medium" sx={{color:"green"}}/>
                } iconPosition="start" label="Discover" />
                <CustomTab icon={
                    <VolunteerActivismIcon className="close-btn" fontSize='medium' sx={{color:"#00a6fb"}}/>
                } iconPosition="start" label="Liked"/>
            </Tabs>
        </div>
    )
}

export default Main
