import React from 'react'
import Layout from '../components/Layout/Layout'
import { Box, Card, CardActionArea, CardContent, CardMedia, Typography } from '@mui/material'
import {MenuList} from '../data/data'

const Menu = () => {
  return (
    <Layout>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center'}}>
         {
          MenuList.map( menu => (
            <Card sx={{ maxWidth:'390px', display: "flex", flexDirection: 'column', m:2}}>
              <CardActionArea>
                <CardMedia sx={{ minHeight: '400px'}} component={'img'} src={menu.image} alt={menu.name} />
              </CardActionArea>
              <CardContent>
                <Typography variant='h5' gutterBottom component={'div'}>
                 {menu.name}
                </Typography>
                <Typography variant='body' gutterBottom component={'div'}>
                 {menu.description}
                </Typography>
              </CardContent>
            </Card>
          )
         )}
        </Box>
    </Layout>
  )
}

export default Menu