import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { useSelector } from 'react-redux';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Tooltip from '@mui/material/Tooltip';
import Avatar from '@mui/material/Avatar';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import {useCreateTaskMutation,useCreateLogoutMutation} from "../redux/slices/api/apiSlice"
export default function ButtonAppBar() {
  const userName = useSelector((state)=>state.counter.counter.username);
  const [createLogout,resultLogout]=useCreateLogoutMutation();
  function logOut() {
    createLogout();
  } 
  if(userName!=null){
    return<>
        <Box sx={{ flexGrow: 1 }}>
      <AppBar  position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce
          </Typography>
          <Tooltip title="Open settings">
              <IconButton onClick={()=>{}} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="https://previews.123rf.com/images/yupiramos/yupiramos1609/yupiramos160912741/62358463-avatar-hombre-sonriente-dibujos-animados-con-barba-usuario-de-persona-masculina-ilustraci%C3%B3n.jpg" />

              </IconButton>
            </Tooltip>
          <h1>{userName} </h1>
          <Button color="inherit" >Logout</Button>
        </Toolbar>
      </AppBar>
    </Box></>
  }
  else{
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Ecommerce
          </Typography>
          <Button color="inherit" href="/login" >Login</Button>
          <Button color="inherit" href='/register'>Register</Button>
          <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={()=>{}}
                color="inherit"
              >
                <AccountCircle />
      </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
  }
}
