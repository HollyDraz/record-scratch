import React from 'react';
import { useHistory, useParams } from 'react-router-dom';


// MUI 

import Typography from '@mui/material/Typography';
import { Grid } from '@mui/material';
import Divider from '@mui/material/Divider';

function Header(){
    const history = useHistory();

    return(
        <div class="container">
 
         <Grid  container direction="row" justifyContent="center" alignItems="flex-start"  spacing={5} >
           <Typography align='center' > <h2>About</h2> 
            <img class="rotate" src="record1.png" width="200" height="200" onClick={() => history.push('/info')}/>
            </Typography>

            <Typography align='center'> <h2>Create</h2> 
            <img class="rotate" src="record2.png" width="200" height="200" onClick={() => history.push('/create')} />
            </Typography>

            <Typography align='center'> <h2>Home</h2> 
            <img class="rotate" src="record3.png" width="200" height="200" onClick={() => history.push('/homepage')}/>
            </Typography>

            <Typography align='center'> <h2>Profile</h2> 
            <img class="rotate" src="scratch.png" width="200" height="200" onClick={() => history.push('/profile')}/>
            </Typography>
        </Grid>

        <Divider sx={{border: "10px  black double ",  borderRadius: "1px" }} />



            


        </div>
    )

}

export default Header;