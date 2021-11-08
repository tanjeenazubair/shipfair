import React from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export const PostCard = () => {
    return (
        <div className="card_container">
            <Card sx={{ maxWidth: 270 }}>
      <CardMedia
        component="img"
        height="140"
        image="http://bsmedia.business-standard.com/_media/bs/img/article/2015-08/31/full/1441037121-004.jpg"
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lahore
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.  </p>

        <p id="">112 to 345</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{new Date().toLocaleDateString()}</Button>
      </CardActions>
    </Card>
            
        </div>
    )
}
