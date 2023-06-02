import React from 'react'
import { Box, Typography } from '@mui/material'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import YouTubeIcon from '@mui/icons-material/YouTube';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';

const Footer = () => {
  return (
    <>
       <Box sx={{ display: 'flex',justifyContent: 'space-between', alignItems: 'center', bgcolor: 'black', color: 'white', p:1}}>
        <Typography variant='h5' sx={{ "@media (max-width:'600px')":{
            fontSize: '1rem'
        }}}>
            All Rights Reserved &copy; <strong>tj3905</strong>.
        </Typography>
       <Box sx={{ my:2, '& svg':{
        cursor: 'pointer',
        color: 'white',
        fontSize: '2.2rem',
        mr:2
       }, '& svg:hover':{
        color: 'greenyellow',
        transform:'translate(5px)',
        transition: 'all 300ms'
       }}}>
        <InstagramIcon />
        <FacebookIcon/>
        <YouTubeIcon/>
        <LinkedInIcon/>
        <TwitterIcon/>
        <GitHubIcon/>
       </Box>
       </Box>
    </>
  )
}

export default Footer