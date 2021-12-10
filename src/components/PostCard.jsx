import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { FeedContext } from '../context/feed-context';
import { useLocation } from 'react-router-dom';

export const PostCard = props => {

  const { removeItem, removePackage, removeTrip } = useContext(FeedContext);
  // console.log(props);
  const location = useLocation();
  // console.log(location.pathname);

  const removeItemHandler = () => {
    removeItem(props.id)
  };
    return (
        <div className="card_container">
            <Card sx={{ maxWidth: 270 }}>
      <CardMedia
        component="img"
        height="140"
        image={props.url || "http://bsmedia.business-standard.com/_media/bs/img/article/2015-08/31/full/1441037121-004.jpg"}
        alt="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        <p>{props.description}</p>

        <p id="">112 to 345</p>
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">{new Date().toLocaleDateString()}</Button>
      </CardActions>
      {location.pathname === '/parcels' ? <button onClick={() => {removePackage(props.id)}}>Remove</button> : location.pathname === '/trips' ? <button onClick={() => {removeTrip(props.id)}}>Remove</button> :<button onClick={removeItemHandler}>Remove</button>  }
    </Card>
            
        </div>
    )
}
