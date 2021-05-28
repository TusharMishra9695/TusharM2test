import React from 'react' 
import {Typography,Box,Container,Grid,TextField, Button,List,ListItem} from '@material-ui/core'
export default function Change() {
    return(<div >
        <Box className="Box " >
<Container display="flex">
    <Typography variant="h5">
       <strong>Change your password</strong> 
    </Typography>
<Box className="Box2">

    <Typography>
        New Password
    </Typography>
 <TextField variant="outlined" className="field1"/>
 <Box className="Box3">
<Typography >
        Confirm New Password
    </Typography>
 <TextField variant="outlined" className="field1"/><br/></Box>
 <button type="submit"  className="button" >Change my password</button>
</Box>

<Container className="contain">
<List>
    <Typography><strong>Password must contain:</strong></Typography>
   
    <ListItem>At least 1 upper case letter (A-Z)</ListItem>
    <ListItem>At least 1 number (0-9)</ListItem>
    <ListItem>At least 8 characters</ListItem>
    </List>
</Container>
</Container>
</Box>

    </div>)
}