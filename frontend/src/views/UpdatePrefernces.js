import * as React from 'react';
import { styled } from '@mui/material/styles';
import Chip from '@mui/material/Chip';
import Paper from '@mui/material/Paper';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MovieFilterIcon from '@mui/icons-material/MovieFilter';
import WaterIcon from '@mui/icons-material/Water';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PeopleOutlineIcon from '@mui/icons-material/PeopleOutline';
import ScienceIcon from '@mui/icons-material/Science';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import ComputerIcon from '@mui/icons-material/Computer';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import PublicIcon from '@mui/icons-material/Public';
import { Button, Grid ,Box, CardActions, Divider} from '@mui/material';
import userService from 'services/userService.js';
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { boolean } from 'yup';


const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1.3),
}));

// functional component called ChipArray that retrieves user preferences and displays 
// them as a set of chips, and it uses Redux for state management.
export default function ChipArray() {
  // const id="643879915855ff1fede9af06";
const  isLoggedIn  = useSelector((state) => {
  return state.user.isLoggedIn;
});


const dispatch = useDispatch();
let id ;
 //let userPreferences;
let [userPreferences, setUserPreferences] = React.useState([]);


if (isLoggedIn){id = useSelector((state) => state.user.user.user._id);
    userPreferences = useSelector((state) => state.user.user.user.preferences)} 

    let navigate = useNavigate();

  const [chipData, setChipData] = React.useState([]);
  useEffect(() => {
    getAllPrefernces(); 
  }, []);



  // an asynchronous function that sends a GET request to the server to retrieve a list of preferences, 
  // and then updates the component's state with the retrieved data.
  const getAllPrefernces = async () => {
    let response = await userService.getAllPrefernce();
    setChipData(response.data);
  };

  // function checks if a given chip already exists in the user's preferences and returns a boolean value accordingly.
  const checkExistingPreferences = (chip) => {
    console.log(userPreferences.includes(chip)+ "   "+chip + " matches "+userPreferences  );
 return  userPreferences.includes(chip);
  };

const [selectedChips, setSelectedChips] = React.useState([]);

// This function updates the selectedChips and userPreferences state
//  based on whether a chip is selected or deselected by the user.
const handleClick = (chip) => () => {
    const isSelected = selectedChips.includes(chip);
    let newSelectedChips = [];
    if (isSelected) {
      newSelectedChips = selectedChips.filter((c) => c !== chip);
    } else {
      newSelectedChips = [...selectedChips, chip];
    }
    setSelectedChips(newSelectedChips);
    setUserPreferences(newSelectedChips.map((chip) => chip._id));
  };


//  This function updates user preferences and navigates to the home page.
const handleSavePreferences = async () => {
  console.log("selectedChips",transformJSONBody(selectedChips));
  userService.updatePrefernce(id, transformJSONBody(selectedChips));

  navigate("/");
};

function transformJSONBody(body) {
    const transformedBody = body.map(item => item._id);
  
    return {'preferences' : transformedBody};
  }

  return (
    <Paper
   
        
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 2.5,
        m: 1,
      }}
      component="ul"
    >
      {chipData.map((data) => {

        let icon;
        if (data.prefernceName === 'Business') {
          icon = <BusinessCenterIcon />;
        }
        if (data.prefernceName
            === 'Entertainment') {
            icon = <MovieFilterIcon />;
          }
          if (data.prefernceName
            === 'Environment') {
            icon = <WaterIcon />;
          }
          if (data.prefernceName
            === 'Food') {
            icon = <FastfoodIcon />;
          }
          if (data.prefernceName
            === 'Health') {
            icon = <HealthAndSafetyIcon />;
          }
          if (data.prefernceName
            === 'Politics') {
            icon = <PeopleOutlineIcon />;
          }
          if (data.prefernceName
            === 'Science') {
            icon = <ScienceIcon />;
            label: "Science"
          }
          if (data.prefernceName
            === 'Sports') {
            icon = <SportsBasketballIcon />;
          }
          if (data.prefernceName
            === 'Technology') {
            icon = <ComputerIcon />;
          }
          if (data.prefernceName
            === 'Toursim') {
            icon = <TravelExploreIcon />;
          }
          if (data.prefernceName
            === 'World') {
            icon = <PublicIcon />;
          }
        
          const isExistingPreference = checkExistingPreferences(data._id);
          //code returns a paper component containing a list of chips, with the ability to select and save preferences.
        return (
          <ListItem key={data.key}>
            <Chip
      
  icon={icon}
  label={data.prefernceName}
  variant={
    selectedChips.includes(data) || isExistingPreference
      ? 'filled'
      : !selectedChips.includes(data) && !isExistingPreference
      ? 'outlined'
      : 'default'
  }
  color={selectedChips.includes(data) ? 'primary' : 'info'}
  onClick={handleClick(data)}
/>
              
          </ListItem>
        
          
        );
      })}
     
     <Divider />
   
   

      <Button variant="contained"onClick={handleSavePreferences}>
        Update 
      </Button>

    
    </Paper>
  
  );
    }