import React from "react";
import "../LogIn/login.css"
import imageLog from'../images/try1.jpeg'
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { FormControl } from '@mui/base/FormControl';


function SignUp(){
    return(
        <div className="parentLog">
            <div className="div1and2"> 
                <div className="div1Log">
                    <div className="textLogIn">
                        <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '2vw'}}>
                            Înregistrează-te
                        </Typography>
                    </div>
                    <div className="formLog">
                      <TextField id="standard-basic" label="Nume si prenume" variant="standard"  style={{color:'black',label:"fullWidth", marginTop:'9vh'}}/>
                        <TextField id="standard-basic" label="Numar de telefon" variant="standard" inputProps={{ maxLength: 10 }}  style={{color:'black',label:"fullWidth", marginTop:'2vh'}}/>
                        <TextField id="standard-basic" label="Email" variant="standard"  style={{color:'black',label:"fullWidth", marginTop:'2vh'}}/>
                        <TextField id="standard-basic" label="Parola" variant="standard" type='password' style={{color:'black',label:"fullWidth", marginTop:'2vh'}}/>
                    </div>
                    <div className="ButtonLog">
                        <Button  variant="outlined" style={{backgroundColor:'black', color:'white', marginRight:'8vw', height:'5vh', marginTop:'9vh'}}>Sign Up</Button>
                    </div>
                   
                </div>
                <div className="div2Log">
                    <div className="imageLog">
                        <img style ={{height:'70vh',width:'40vw', borderTopRightRadius:'2vw', borderBottomRightRadius:'2vw',boxShadow:' 4px 5px 10px rgba(0, 0, 0, 0.5)'}} src={imageLog} />
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default SignUp