import React from 'react'
import login_background from '../../assets/login-background.png'
import InputAdornment from '@mui/material/InputAdornment';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import VpnKeyOutlinedIcon from '@mui/icons-material/VpnKeyOutlined';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
const Index = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="grid grid-rows-2 gap-4 md:w-1/2">
          <Typography variant='h5' style={{fontWeight: 'bold'}} className='font-serif'>Log In</Typography>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-email">Email</InputLabel>
            <OutlinedInput
              id="outlined-adornment-email"
              startAdornment={
                <InputAdornment position="start">
                  <MailOutlineIcon/>
                </InputAdornment>
              }
              placeholder='Email'
              label="Email"
              size='small'
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 }}>
            <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
            <OutlinedInput
              id="outlined-adornment-password"
              startAdornment={
                <InputAdornment position="start">
                  <VpnKeyOutlinedIcon/>
                </InputAdornment>
              }
              placeholder='Password'
              type='password'
              label="Password"
              size='small'
            />
          </FormControl>
          <FormControl fullWidth sx={{ m: 1 , gap: 2}} >
          <Button variant="contained" sx={{textTransform: 'none'}}>Log In</Button>
          <Typography className='text-center font-serif text-blue-600 cursor-pointer' onClick={()=> navigate('/signup')}>Not a Registered User?</Typography>
          </FormControl>
        </div>
      </div>
      <div className="w-2/3 hidden md:block">
        <img
          src={login_background}
          alt="login-img"
          className="h-screen w-full object-cover"
        />
      </div>
    </div>
  );
}

export default Index
