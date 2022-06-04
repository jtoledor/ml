import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import SearchIcon from '@material-ui/icons/Search';
import { IconButton, TextField } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import logo from '../assets/img/Logo_ML.png';
import '../assets/css/style.css'

import { NavLink } from "react-router-dom";
import { Link } from 'react-router-dom';

export default function Buscador(props) {
  const [search,SetSearch] = React.useState('');

  const handleChangeSearch = e => {
      SetSearch(e.target.value)
  }

  const handleClickSearch = () =>{
    props.history.push('/items?search='+search)
    window.location.reload()
  }
  return (
    <Box >
      <AppBar position="static" className='appbar'>
        <Toolbar>
          <Grid container direction='row' alignItems='center'>
            <Grid item xs={1}  >
            <img src={logo} width={45}/>
            </Grid>
            <Grid item xs={9}>
              <Box >
             
               <TextField  
               id='search-input'
               placeholder='Nunca dejes de buscar'
               onChange={handleChangeSearch}
               value={search}
               className='input-search'
               InputProps={{
                 endAdornment:<IconButton
                 onClick={handleClickSearch}
                 edge="end"
               >
                  <SearchIcon/>
               </IconButton>
               }}
               />

             
               </Box>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
