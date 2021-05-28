import React from 'react'
import './Forgotpassword.css'
import {Typography,Grid,Box,Container,Card,TextField,Button} from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link,BrowserRouter as Router} from 'react-router-dom'


export default function Forgot(){
    return(<div>
        <Container className="Fog1">
        <img src="mail.jpg" className="img"/>
        <Box  >
           <h2  className="Fog2" ><strong>Forgot your password?</strong></h2> 
            <Typography variant="*" className="typo3" style={{marginTop:"10%;"}}paragraph>Enter your username or the email or phone <br/> number linked to your account.</Typography>
        </Box>
        <Box>
        <TextField label="Enter Username" variant="outlined" className="Fog3"/>
        </Box>
        <Button  variant="contained" className="Fog4" color="primary">
       Send
        </Button>
        <Box className="Fog5">
            <ArrowBackIcon /><Router><Link to="" className="link" >Back to Login</Link></Router>
        </Box>
        </Container>
     
       
    </div>)
}