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
import { Button } from '@mui/material';

const ListItem = styled('li')(({ theme }) => ({
  margin: theme.spacing(1.3),
}));

export default function ChipsArray() {
  const [chipData, setChipData] = React.useState([
    { key: 0, label: 'Business' },
    { key: 1, label: 'Entertainment' },
    { key: 2, label: 'Environment' },
    { key: 3, label: 'Food' },
    { key: 4, label: 'Health' },
    { key: 5, label: 'Politics' },
    { key: 6, label: 'Science' },
    { key: 7, label: 'Sports' },
    { key: 8, label: 'Technology' },
    { key: 9, label: 'Toursim' },
    { key: 10, label: 'World' }
  ]);

  const handleDelete = (chipToDelete) => () => {
    setChipData((chips) => chips.filter((chip) => chip.key !== chipToDelete.key));
  };


  const handleSavePreferences = () => {
    const labels = chipData.map((chip) => chip.label);
    console.log(labels);
  };

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

        if (data.label === 'Business') {
          icon = <BusinessCenterIcon />;
        }
        if (data.label === 'Entertainment') {
            icon = <MovieFilterIcon />;
          }
          if (data.label === 'Environment') {
            icon = <WaterIcon />;
          }
          if (data.label === 'Food') {
            icon = <FastfoodIcon />;
          }
          if (data.label === 'Health') {
            icon = <HealthAndSafetyIcon />;
          }
          if (data.label === 'Politics') {
            icon = <PeopleOutlineIcon />;
          }
          if (data.label === 'Science') {
            icon = <ScienceIcon />;
          }
          if (data.label === 'Sports') {
            icon = <SportsBasketballIcon />;
          }
          if (data.label === 'Technology') {
            icon = <ComputerIcon />;
          }
          if (data.label === 'Toursim') {
            icon = <TravelExploreIcon />;
          }
          if (data.label === 'World') {
            icon = <PublicIcon />;
          }
         

        return (
          <ListItem key={data.key}>
            <Chip
              icon={icon}
              label={data.label}
              variant="outlined" color="info"
              onDelete={data.label === 'React' ? undefined : handleDelete(data)}
            />
              
          </ListItem>
        
          
        );
      })}
  <Button variant="outlined" onClick={handleSavePreferences}>
        Save 
      </Button>

    </Paper>
    
  );
}