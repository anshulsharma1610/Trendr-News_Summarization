import * as React from "react";
import { styled } from "@mui/material/styles";
import Chip from "@mui/material/Chip";
import Paper from "@mui/material/Paper";
import BusinessCenterIcon from "@mui/icons-material/BusinessCenter";
import MovieFilterIcon from "@mui/icons-material/MovieFilter";
import WaterIcon from "@mui/icons-material/Water";
import FastfoodIcon from "@mui/icons-material/Fastfood";
import HealthAndSafetyIcon from "@mui/icons-material/HealthAndSafety";
import PeopleOutlineIcon from "@mui/icons-material/PeopleOutline";
import ScienceIcon from "@mui/icons-material/Science";
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import ComputerIcon from "@mui/icons-material/Computer";
import TravelExploreIcon from "@mui/icons-material/TravelExplore";
import PublicIcon from "@mui/icons-material/Public";
import { Button, Grid, Box, Typography } from "@mui/material";
import userService from "services/userService.js";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import MainCard from "components/cards/MainCard";
import { ListItemText } from "@mui/material";

const ListItem = styled("li")(({ theme }) => ({
  margin: theme.spacing(1.3),
}));

export default function ChipsArray() {
  // const id="643879915855ff1fede9af06";
  const isLoggedIn = useSelector(state => {
    console.log("---state here at prefernce", state);
    return state.user.isLoggedIn;
  });
  const dispatch = useDispatch();
  let id;
  if (isLoggedIn) id = useSelector(state => state.user.user.user._id);
  console.log("---id----", id);
  let navigate = useNavigate();

  const [chipData, setChipData] = React.useState([]);
  useEffect(() => {
    getAllPrefernces();
  }, []);

  const getAllPrefernces = async () => {
    let response = await userService.getAllPrefernce();
    setChipData(response.data);
  };

  const [selectedChips, setSelectedChips] = React.useState([]);

  const handleClick = chip => () => {
    const newSelectedChips = selectedChips.includes(chip)
      ? selectedChips.filter(c => c !== chip)
      : [...selectedChips, chip];
    setSelectedChips(newSelectedChips);
  };

  const handleSavePreferences = () => {
    console.log("selectedChips", transformJSONBody(selectedChips));
    userService.updatePrefernce(id, transformJSONBody(selectedChips));
    navigate("/");
  };

  function transformJSONBody(body) {
    const transformedBody = body.map(item => item._id);

    return { preferences: transformedBody };
  }

  return (
    <MainCard
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ListItemText
        sx={{ ml: 2 }}
        primary={
          <Typography variant="h3" color="textSecondary">
            Choose your Preferences
          </Typography>
        }
        secondary={
          <Typography variant="caption" color="textSecondary">
            Your News, Your Way
          </Typography>
        }
      />
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          listStyle: "none",
        }}
        component="ul"
      >
        {chipData.map(data => {
          let icon;
          if (data.prefernceName === "Business") {
            icon = <BusinessCenterIcon />;
          }
          if (data.prefernceName === "Entertainment") {
            icon = <MovieFilterIcon />;
          }
          if (data.prefernceName === "Environment") {
            icon = <WaterIcon />;
          }
          if (data.prefernceName === "Food") {
            icon = <FastfoodIcon />;
          }
          if (data.prefernceName === "Health") {
            icon = <HealthAndSafetyIcon />;
          }
          if (data.prefernceName === "Politics") {
            icon = <PeopleOutlineIcon />;
          }
          if (data.prefernceName === "Science") {
            icon = <ScienceIcon />;
            label: "Science";
          }
          if (data.prefernceName === "Sports") {
            icon = <SportsBasketballIcon />;
          }
          if (data.prefernceName === "Technology") {
            icon = <ComputerIcon />;
          }
          if (data.prefernceName === "Toursim") {
            icon = <TravelExploreIcon />;
          }
          if (data.prefernceName === "World") {
            icon = <PublicIcon />;
          }

          return (
            <ListItem key={data.key}>
              <Chip
                icon={icon}
                label={data.prefernceName}
                variant={
                  selectedChips.includes(data)
                    ? "filled"
                    : "outlined"
                }
                color={
                  selectedChips.includes(data)
                    ? "primary"
                    : "info"
                }
                onClick={handleClick(data)}
              />
            </ListItem>
          );
        })}
      </Paper>
      <Paper
        sx={{
          display: "flex",
          flexWrap: "wrap",
          listStyle: "none",
          justifyContent: "center",
          m: 1,
        }}
      >
        <Button
          variant="contained"
          onClick={handleSavePreferences}
          sx={{ mt: 2, width: 100 }}
        >
          Save
        </Button>
      </Paper>
    </MainCard>
  );
}
