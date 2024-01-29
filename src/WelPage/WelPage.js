import React, { useState, useEffect } from 'react';
import './welpage.css'
import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import image from '../images/try4.jpeg'
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
function WelPage() {
        const navigateWel = useNavigate();
    return(
        <div className='parent'>
            <div className='div2'>
                    <div className='images'>
                        <img style ={{height:'90vh', marginLeft:'7vw', width:'30vw', borderRadius:'2vw', boxShadow:' 4px 5px 10px rgba(0, 0, 0, 0.5)'}} src={image} />
                    </div>
            </div>
            <div className='divNunta'>
                <div className='navbuttons'>
                        <Button variant="outlined" style={{backgroundColor:'black', color:'white' }}>
                            Posteaza un anunt
                        </Button>   
                        <Button variant="outlined" style={{backgroundColor:'black', color:'white' }}>
                            Cauta
                        </Button>
                        <Button variant="outlined" style={{backgroundColor:'black', color:'white' }} onClick={() => navigateWel('/LogIn')}> 
                            LogIn
                        </Button>
                        
                </div>
                <div className='welText'>
                    <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '5vw' }}>Ai nunta anul acesta?</Typography>
                    <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '3vw', marginLeft: '5vw'}}>Aici găsești tot ce ai nevoie</Typography>
                
                <div className="slide-down">
                    
                    <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '2vw',  marginLeft:'10vw',  textDecoration:'underline'  }}>
                        <CheckCircleOutlineIcon style={{ color: 'green' }} />
                        Contracte generate automat
                    </Typography>
                </div>
                <div className="slide-down2 ">
                    
                    <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '2vw', marginLeft:'10vw', textDecoration:'underline'  }}>
                        <CheckCircleOutlineIcon style={{ color: 'green' }} />
                        Corturi
                    </Typography>
                </div>
                <div className="slide-down3">
                    
                    <Typography style={{ fontFamily: 'Lucida Handwriting, cursive', fontSize: '2vw' ,  marginLeft:'10vw', textDecoration:'underline' }}>
                        <CheckCircleOutlineIcon style={{ color: 'green' }} />
                        Aranjamente
                    </Typography>
                </div>
            </div>

            </div>
            
            
            
            
        </div>

    );
}
export default WelPage
