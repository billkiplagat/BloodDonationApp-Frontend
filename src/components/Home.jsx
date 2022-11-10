import { Button,Box, CardMedia, styled, Typography } from '@mui/material'
import React from 'react'
import Navbar from './Navbar'
import { useNavigate } from 'react-router-dom';
import pic from '../images/pic2.jpg';

export const Home = () => {
const navigate = useNavigate()
const StyledBox = styled(Box)({
  display:'flex',
  justifyContent: 'space-between',
  // alignItems: 'right',
  backgroundColor: '#edf0f2'
  
})

  return (
    <div>
      <Navbar/>
       
       <Box sx={{m:1}}>
       <CardMedia 
        component="img"
        height={500}
        width={100}
        image={pic}
        
        alt="Paella dish"
        />
       </Box>

       <StyledBox sx={{
        m:1,
        
       }}>
        <Typography sx={{
          marginTop:0,
          marginBottom: 6
        }}>
          <h2>It’s safe and it saves</h2>
          The Kenya Blood Transfusion and Transplant Service (KBTTS) was established
           in the year 2000 within the Ministry of Health.<br/>
          Its mandate is to collect, test, process and distribute blood and
           blood products to all transfusing hospitals in Kenya.

        </Typography>
       <Button sx={{
        height: 40,
        alignSelf:'center',
        marginRight:4
       }} color="success" variant="contained" onClick={() => {navigate("/new donor") }}>
         Register As A Donor</Button>
       </StyledBox>
        
        
        
    </div>
  )
}
