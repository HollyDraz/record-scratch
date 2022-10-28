import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import {useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';
import axios from 'axios';
// MUI 

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';

function Header(){






    return(
        <div>
         <Grid container direction="row" justifyContent="center" alignItems="flex-start" >
            <img src="record1.png" width="200" height="200" onClick={() => history.push('/info')} />
            <img src="record2.png" width="200" height="200" onClick={() => history.push('/create')} />
            <img src="record3.png" width="200" height="200" onClick={() => history.push('/homepage')}/>
            <img src="scratch.png" width="200" height="200" onClick={() => history.push('/login')}/>

        </Grid>
            


        </div>
    )

}

export default Header;