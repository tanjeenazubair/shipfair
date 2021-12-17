import React from 'react'
import "../stylesheets/Footer.scss"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useHistory } from 'react-router-dom';

const Footer = () => {
  const history = useHistory();

  return (
    <footer className='footer'>
      <div className='footer_details'>
      <div>
        Follow us on 
      </div>
      <div className='footer_social_media_icons'>
        <ul>
          <li>
          <FacebookIcon/>
          </li> 
          <li>
            <InstagramIcon/>
          </li>
          <li>
            <TwitterIcon/>
          </li>
        </ul>
      </div>
      <div className="footer_details_container">
      Shipfair is a brand new startup that helps travelers monetize their extra luggage space by pairing them with individuals and small businesses who need to ship.
      </div>
      </div>
     
      <div className="footer_items">
      <ul className='footer_list'>
        <li>
        <button onClick={()=>{history.push("/home")}}>Home</button>
        </li>       
        <li>
          <button onClick={()=>{history.push("/contact")}}>Contact</button>
        </li>
        <li>
        <button onClick={()=>{history.push("/")}}>Privacy Policy</button>       
         </li>
        <li>
        <button onClick={()=>{history.push("/")}}>Giveaway</button>         
        </li>
      </ul>

      
      

      </div>
      
    </footer>
  )
}

export default Footer