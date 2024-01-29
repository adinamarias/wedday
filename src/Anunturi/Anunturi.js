import React, { useState } from "react";
import './anunturi.css';
import MenuIcon from '@mui/icons-material/Menu';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import logo from '../images/logo3.png'
import LogoutIcon from '@mui/icons-material/Logout';
import { Form, TextArea } from 'semantic-ui-react';
import SearchIcon from '@mui/icons-material/Search';
import  Button from "@mui/material/Button";
import Typography from '@mui/material/Typography'
import Tooltip from '@mui/material/Tooltip';
import Checkbox from '@mui/material/Checkbox';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import card1 from '../images/try3.jpeg'
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Avatar from '@mui/material/Avatar';
import foto1 from '../images/foto1.jpeg'
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import MailIcon from '@mui/icons-material/Mail';
import sign from '../images/sign.png'


function Anunturi(){

  const [servicii, setSevicii] = React.useState('');
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [check, setChek] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleClickFavorite = () => {
    setIsFavorite(!isFavorite);
  };


  const handleChange = (event) => {
    setSevicii(event.target.value);
  };
  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

    const handleClickCard = () => {
    console.log('Card clicked!');
  };
 

return(
    <div className="div1anunt">
            <div className="navbar">
                <div className="elementsNav">
                    <Tooltip title="Meniu">
                        <Button  style={{color:'white', height:'8vh', marginLeft:'1vw'}} onClick={toggleMenu}>
                            <MenuIcon/>
                        </Button>
                    </Tooltip>
                    <img  src={logo} style={{ marginLeft:'1vw'}}/>    
                    <Form>
                        <TextArea  rows={1} maxRows={1} placeholder='Caută' style={{width:'25vw', marginLeft:'40vh', marginTop:'1.5vh'}} />
                    </Form>
                    <SearchIcon style={{color:'white', height:'8vh', marginLeft:'1vw'}}/>
                </div>
                <div className="elementsNav2">
                    <Tooltip title="Info">
                        <Button style={{color:'white', height:'8vh', marginRight:'1vw'}}>
                            <AccountBoxIcon /> 
                        </Button>
                    </Tooltip>
                    <Tooltip title="Adauga anunt">
                        <Button style={{color:'white', height:'8vh'}}>
                            <AddCircleIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="Favorite">
                        <Button style={{color:'white', height:'8vh'}}>
                            <FavoriteBorderIcon />
                        </Button>
                    </Tooltip>
                    <Tooltip title="LogOut">
                        <Button style={{color:'white', height:'8vh'}}>
                            <LogoutIcon />
                        </Button>
                    </Tooltip>
                
                
                </div>
            </div>
            <div className="div2anunt">
            {isMenuOpen && (
                <div className="meniu">
                    <div className="inMeniu">
                    <Typography style={{ fontFamily: 'Lucida Console, monospace', fontSize: '14px', marginLeft:'6vw', color:'#e0e0e0',height:'0.5vh'}}>
                            Filtre
                        </Typography>
                        <div className="inMeniu2">
                            <div className="checkBox">
                                <Typography style={{ fontFamily:'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold', marginTop:'5vh'}}>
                                    <Checkbox   style={{color:'black'}}
                                    />
                                    Aranjamente
                                </Typography>
                                <Typography style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>
                                    <Checkbox  style={{color:'black'}}/>
                                    Foto/Video
                                </Typography>
                                <Typography  style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>
                                    <Checkbox   style={{color:'black'}} />
                                    Corturi
                                </Typography>
                                <Typography  style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>
                                    <Checkbox  style={{color:'black'}} />
                                    Lăutari
                                </Typography>
                                <Typography  style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>
                                    <Checkbox    style={{color:'black'}}/>
                                    Invitații
                                </Typography>
                            
                                <FormControl variant="standard" sx={{ m: 1, minWidth: 150, marginLeft:'1vw' }} >
                                    <InputLabel id="demo-simple-select-standard-label"><Typography style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>Servicii</Typography></InputLabel>
                                    <Select
                                        labelId="demo-simple-select-standard-label"
                                        id="demo-simple-select-standard"
                                        value={servicii}
                                        onChange={handleChange}
                                        label="Age"
                                    >
                                        <MenuItem value="" style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>
                                            <em>None</em>
                                        </MenuItem>
                                        <MenuItem value={10} style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>Artificii</MenuItem>
                                        <MenuItem value={20} style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>Fum</MenuItem>
                                        <MenuItem value={30} style={{ fontFamily: 'Lucida Console, monospace', fontSize: '1vw', color:'black', fontWeight:'bold'}}>Bar</MenuItem>
                                
                                    </Select>
                                </FormControl>
                                
                            </div>
                        </div>  
                    </div>
                </div>
            )}

            <div className="anunt">
                <Card  className="cardAnunt" onClick={handleClickCard} style={{boxShadow: '5px 5px 10px rgba(0, 0, 0, 0.4)',overflow: 'auto',backgroundColor: 'black', borderRadius:'1vw'}}>
                    <CardMedia
                        sx={{ height: 76 }}
                        image={card1}
                        title="green iguana"
                    />
                    <CardContent >
                        <Typography gutterBottom variant="h5" component="div" style={{color:'white'}}>
                            Foto/Video
                        </Typography>
                        
                        <Typography variant="body2" color="text.secondary" style={{color:'white'}}>
                            Sunt un fotograf de nuntă profesionist, modern, creativ și divers și totodată un storyteller. 
                        </Typography>
                    <div style={{width:'11vw', height:'7vh', flexDirection:'row', justifyContent:'space-between', display:'flex'}}>
                        <Avatar style={{marginTop:'3vh'}} alt="Travis Howard" src={foto1} />
                        <Typography style={{flexDirection:'row', display:'flex', marginTop:'4vh', color:'white'}}>
                            Andreea Ionescu
                        </Typography>
                    </div>
                    </CardContent>
                    <CardActions style={{justifyContent:'space-between'}}  >
                        <Button style={{color:'white'}} size="small">Vezi mai mult</Button>
                        <Button style={{color:'white'}} size="small" onClick={handleClickFavorite}>{isFavorite ? <FavoriteIcon style={{color:'white'}} /> : <FavoriteBorderIcon style={{color:'white'}} />}</Button>
                    </CardActions>
                </Card>
            </div>
        </div>
        <div className="contact">
            <div className="titlecontact">
                <Typography style={{fontFamily:'cursive',fontSize:'3vw', color:'white'}}>Contact</Typography>
            </div>
            <div className="contetContact1">
                <div className="contentContact2">
                    <div className="contentContact3">
                        <Typography style={{fontFamily:'cursive',fontSize:'1.3vw', color:'white'}}>
                            <MailIcon />
                            wedday@yahoo.com
                        </Typography>
                        
                    </div>
                     <div className="contentContact4">
                    </div>
                </div>
                <div className="developed">
                    <Typography style={{fontFamily:'cursive',fontSize:'1.3vw', color:'white'}}>
                        Developed by Adina Săndoiu
                        
                    </Typography>
                      
                </div>
                 {/* <img style ={{height:'9vh', width:'9vw',backgroundSize: 'cover' }} src={sign} ></img> */}
            </div>
        </div>
    </div>

)

}

export default Anunturi