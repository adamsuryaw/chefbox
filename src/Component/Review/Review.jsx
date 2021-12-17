import React from 'react'
import avatarPic2 from '../../Asset/Ellipse 11.svg'
import { Rating, Divider,  Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea, Avatar } from '@mui/material';
import './Review.css'

function Review({details}) {
    const [value, setValue] = React.useState(2);
    
    // console.log(details, 'review details')

    return (
        <div className="review-content">
            <div className="avatar-section">
                <img
                    alt="Remy Sharp" 
                    src={details.user.image} 
                    // sx={{ width: 34, height: 34, paddingBottom: '20px', objectFit: 'cover' }}
                />
                <div className="review-in">
                    <div className="name-avatar">
                        <Typography 
                            component="div"
                            sx={{
                                fontFamily: 'Nunito',
                                fontWeight: 'bold',
                                fontSize: '16px',
                                color: '#000000',
                                width: '80px',
                                height: '26px',
                                margin: '6px 6px 0px 0px'
                            }}
                        >
                            {details.user.userName}
                        </Typography>
                        <Divider 
                            orientation="vertical" 
                            variant="middle" 
                            flexItem 
                        />
                        <Typography 
                            component="div"
                            sx={{
                                fontFamily: 'Nunito',
                                fontWeight: 'normal',
                                fontSize: '14px',
                                color: '#BDBDBD',
                                width: '80px',
                                height: '20px',
                                margin: '6px 6px 0px 6px'
                            }}
                        >
                            {details.commentTime}
                        </Typography>
                    </div>
                    <Rating 
                        name="read-only" 
                        value={value} 
                        readOnly
                        sx={{
                            color: '#B6340B',
                            marginRight: '13px',
                        }}
                        size="small"
                    />
                    <p>
                        {details.comment}
                    </p>
                </div>
                <div className="comment">
                    
                </div>
            </div>
            <Divider />
        </div>
    )
}

export default Review
