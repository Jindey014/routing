import React from 'react'
import './Footer.css'
import InstagramIcon from '@mui/icons-material/Instagram'
import TwitterIcon from '@mui/icons-material/Twitter'
import FacebookIcon from '@mui/icons-material/Facebook'
import LinkedInIcon from '@mui/icons-material/LinkedIn'

const Footer = () => {
  return (
    <div className="footerContainer">
      <div className="socials">
        <InstagramIcon className="icon"></InstagramIcon>
        <TwitterIcon className="icon"></TwitterIcon>
        <FacebookIcon className="icon"></FacebookIcon>
        <LinkedInIcon className="icon"></LinkedInIcon>
      </div>
      <div className="copyrights">&copy; 2021 Indianfoood.com</div>
    </div>
  )
}

export default Footer
