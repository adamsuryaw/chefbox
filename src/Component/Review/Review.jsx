import React from 'react'
import avatarPic2 from '../../Asset/Ellipse 11.svg'
import { Rating, Divider,  Card, CardActions, CardContent, CardMedia, Button, Typography, CardActionArea, Avatar } from '@mui/material';
import './Review.css'

function Review(props) {
    const [value, setValue] = React.useState(2);
    const {comment} = props
    console.log(props)

    return (
        <div className="review-content">
            <div className="avatar-section">
                <Avatar 
                    alt="Remy Sharp" 
                    src={avatarPic2} 
                    sx={{ width: 34, height: 34, paddingBottom: '20px' }}
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
                            {comment.namePost}
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
                                width: '69px',
                                height: '20px',
                                margin: '6px 6px 0px 6px'
                            }}
                        >
                            {comment.timePost}
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
                        {comment.review}
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
