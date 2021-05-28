import React from 'react'
import './Login.css'
import {Typography,Grid,Box,Container,Card,TextField, Checkbox,Button} from '@material-ui/core'
import {BrowserRouter as Router ,Link} from 'react-router-dom'
export default function Login(){
    return(<div>
    <img src="Design.png" className="image" />
       <    Container className="log1">
        <img src="OIP2.png" className="image3" /><br/>
        <strong className="dash"> NSOC DASHBOARD</strong> <h6 className="font"><i>Menuju Lembage Cyber World Class</i></h6>
        <Box className="lox3">
<Typography  >
     Your email
    </Typography>
 <TextField variant="outlined" label="Enter your email" className="yield1"/><br/></Box>
 <br /><Box className="lox4">
<Typography >
   Password
    </Typography>
 <TextField variant="outlined" label="Enter your password" className="yield1"/><br/></Box>
 <Box className="lox5">
     <Checkbox color="primary"/>
     Remember me &nbsp;&nbsp;&nbsp;
     <Router >
         <Link to="/" className="link2">Recover Password</Link>
     </Router>
 </Box>
 <Box className="lox6">
 <Button  variant="contained" className="Fog45" color="primary">
       Sign In
        </Button>
 </Box>
       </    Container>
    </div>)
}