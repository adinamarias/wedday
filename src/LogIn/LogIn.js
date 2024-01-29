import React from "react";
import './login.css'
import imageLog from'../images/try1.jpeg'
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';

function LogIn(){
     const navigateLog = useNavigate();
    return(
        <div className="parentLog">
            <div className="div1and2"> 
                <div className="div1Log">
                    <div className="textLogIn">
                        <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '2vw'}}>
                            Loghează-te
                        </Typography>
                    </div>
                    <div className="formLog">
                        <TextField id="standard-basic" label="Email" variant="standard"  style={{color:'black',label:"fullWidth"}}/>
                        <TextField id="standard-basic" label="Parola" variant="standard" type='password' style={{color:'black',label:"fullWidth"}}/>
                    </div>
                    <div className="ButtonLog">
                        <Button  variant="outlined" style={{backgroundColor:'black', color:'white', marginRight:'8vw', height:'5vh'}} onClick={() => navigateLog('/Anunturi')}>LogIn</Button>
                    </div>
                    <div className="infoLog">
                        <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '1.4vw', marginLeft:'30vh'}}>Nu ai cont?</Typography>
                        <Button style={{ color:'black', textDecoration:'underline'}} onClick={() => navigateLog('/SignUp')}>Înregistrează-te</Button>
                    </div>
                </div>
                <div className="div2Log">
                    <div className="imageLog">
                        <img style ={{height:'70vh',width:'40vw', borderTopRightRadius:'2vw', borderBottomRightRadius:'2vw',boxShadow:' 4px 5px 10px rgba(0, 0, 0, 0.5)' }} src={imageLog} />
                        
                    </div>
                </div>
            </div>
        </div>
    )

}
export default LogIn