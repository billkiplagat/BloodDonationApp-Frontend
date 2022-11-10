import { Box, Button,Typography, CardMedia, FormControlLabel,Grid, Paper, Radio, TextField, RadioGroup, FormLabel, FormControl, ButtonGroup } from '@mui/material';
// import axios from "axios"
import React from 'react';
import Navbar from './Navbar';
import registerpic from '../images/registerDonorpic.jpg';
import { useForm } from 'react-hook-form';
import * as yup from "yup"
import {yupResolver} from '@hookform/resolvers/yup'

const donorScheme = yup.object().shape({
  fullname: yup.string().required(),
  email: yup.string().email().required(),
  town: yup.string().required(),
  bloodtype: yup.string().required()
})


export const NewDonor = () => {
  const paperStyle = { padding: '30px 20px', width: 500, margin: '120px 20px',backgroundColor: '#edf0f2' };
  const textFieldStyle = { margin: '10px auto' }


  const {register,reset, handleSubmit} = useForm({
    resolver:yupResolver(donorScheme)
})



  const postdata = (data) => {
    // e.preventDefault()
    // axios.post("http://localhost:8080/donor/save",{
    //   headers: {"Content-Type": "application/json"},
    //   body: JSON.stringify(data)

    fetch("http://localhost:8080/donor/save",{
      method: "POST",
      headers: {"Content-Type": "application/json"},
      body: JSON.stringify(data)
    })

    .then(response => console.log(response)) 
}


  return (
   
    <Grid >
         <Navbar/>
      <Box sx={{
        display: 'flex',
        alignItems: 'center',
         }}>
        

      
      <Paper style={paperStyle}>
        <Grid> 
          <h2>Please fill the form to Register As Donor</h2>

          <form onSubmit={handleSubmit(postdata)}>
            <TextField
              style={textFieldStyle}
              autoFocus
              fullWidth
              label="FullName"
              placeholder="Enter your FullName"
              {...register("fullname")}
              
            />
            <TextField
              style={textFieldStyle}
              fullWidth
              label="Email"
              placeholders="Enter your Email Address"
              {...register("email")}
            
            />
               <TextField
              style={textFieldStyle}
              fullWidth
              label="town"
              placeholders="State your town"
              {...register("town")}
             
            />
            <FormControl>
            <FormLabel>Blood Types</FormLabel>
              
          <RadioGroup>
            
            <Box
                   sx={{ display: 'flex', flexWrap: 'wrap',  p: 1, m: 1, bgcolor: 'background.paper',
                   borderRadius: 1,
                  }}
                >
            <FormControlLabel
                    value="A+"
                    control={<Radio />}
                    label="A+"
                    {...register("bloodtype")}
                  
                  />
                  <FormControlLabel
                    value="B+"
                    control={<Radio />}
                    label="B+"
                    {...register("bloodtype")}
                    
                  />
                      <FormControlLabel
                    value="AB+"
                    control={<Radio />}
                    label="AB+"
                    {...register("bloodtype")}
                   
                  />
                      <FormControlLabel
                    value="A-"
                    control={<Radio />}
                    label="A-"
                    {...register("bloodtype")}
                  
                  />
                      <FormControlLabel
                    value="B-"
                    control={<Radio />}
                    label="B-"
                    {...register("bloodtype")}
                  
                  />
                      <FormControlLabel
                    value="AB-"
                    control={<Radio />}
                    label="AB-"
                    {...register("bloodtype")}
                   
                  />
                      <FormControlLabel
                    value="O+"
                    control={<Radio />}
                    label="O+"
                    {...register("bloodtype")}
                    
                  />
                      <FormControlLabel
                    value="O-"
                    control={<Radio />}
                    label="O-"
                    {...register("bloodtype")}
                  
                  />
                  <FormControlLabel
                    value="unknown"
                    control={<Radio />}
                    label="unknown"
                    {...register("bloodtype")}
                  
                  />
                   </Box>
            </RadioGroup>
            </FormControl>
          


                
          <ButtonGroup sx={{m:1,
          display: 'flex',
          gap:2,
          
          
          
          }}>
          <Button  type="submit"  variant="contained" color="primary">
              Register
            </Button>

                 
            {/* <Button
             type="submit" onClick={() => reset()} variant="contained" color="primary">
              Reset
            </Button> */}
          </ButtonGroup>
         
          </form>
        </Grid>
      </Paper>
      <Box sx={{m:1,
      marginTop: 0,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
      
      }}>
        <Typography align='left' variant='h4' sx={{m:0}}>A donation of blood means a few minutes
         to you, but a lifetime for somebody else.</Typography>
       <CardMedia 
        component="img"
        height={500}
        maxWidth={200}
        image={registerpic}
        
        alt="Paella dish"
        />

      
       </Box>
      
      </Box>

    </Grid>
  );
};
