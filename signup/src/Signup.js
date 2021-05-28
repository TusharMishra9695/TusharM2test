import React from 'react'
import './Signup.css'
import {Typography,Grid,Box,Container,Card,TextField, Checkbox,Button} from '@material-ui/core'
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import {BrowserRouter as Router ,Link} from 'react-router-dom'
export default function Signup(){
    return (<div>
    <Box className="sign1">
  <Container className="sign2">
  <img src="Design3.png" alt="error" className="sign3"></img> 
 <Typography className="sign4" ><strong>BoardMe</strong></Typography>
 <h4><strong className="sign5">Already Signed up?</strong></h4>
 <h6 className="sign6">All users on MySpace will know that there are millions of <br/>people
 out there.Every day besides so many people<br/> joining this community</h6>
  <Box >
      <Button variant ="outlined" className="sign7" style={{color:"white"}} >Login</Button>
  </Box>
  <Box className="signfloat">
    <h4><strong>Sign Up for an Account</strong></h4>
  <h6 className="sign8">Let's get you all set up so you can start creating your <br/>first onboarding experience.</h6></Box>
  <Box className="signfloat2">
<Typography  >
   First Name
    </Typography>
 <TextField variant="outlined" label="Enter first name" className="yield11"/><br/>
 </Box>
 <Box className="signfloat3">
<Typography  >
   Last Name
    </Typography>
 <TextField variant="outlined" label="Enter last name" className="yield11"/><br/>
 </Box>
 <br />
  <Box className="lox3">
  <span style={{color:"black"}}>Email</span><br/>
 <TextField variant="outlined" label="Enter your email" className="yield1"/><br/>
 </Box>
 <br /><Box className="lox4">
<span style={{color:"black"}}>Password</span><br />
 <TextField variant="outlined" label="Enter a strong password" className="yield2"/><br/></Box>
 <Box className="lox5">
     <Checkbox color="primary"/>
     I accept BoardMe's &nbsp;
     <Router >
         <Link to="/" className="link2">Terms and conditions</Link>
     </Router>
 </Box>
 <Box className="lox6">
 <Button  variant="contained" className="Fog45" color="primary">
       Sign Up
        </Button>
 </Box>
<Box className="lox7">
<h6>
    Or sign up using
</h6>
<Router>
    <Link to="/" className="link2">< FacebookIcon />&nbsp;&nbsp;<TwitterIcon/></Link>
</Router>
</Box>

  </Container>
    </Box>
    </div>)
}