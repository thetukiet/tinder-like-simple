import React from 'react'
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import FavoriteIcon from '@mui/icons-material/Favorite';

function CardButtons() {
    return (
        <div className="card-buttons">
            <IconButton>
                <CloseIcon className="close-btn" fontSize="large"/>
            </IconButton>
            <IconButton>
                <FavoriteIcon className="favirate-btn" fontSize="large"/>
            </IconButton>
        </div>
    )
}

export default CardButtons
