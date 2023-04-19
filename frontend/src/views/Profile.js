import { Box, Container, Stack, Typography, Unstable_Grid2 as Grid } from '@mui/material';
import { AccountProfiles } from './Layout/ProfileLayout/account-profile';
import { AccountProfileDetails } from './Layout/ProfileLayout/account-profile-details';
import UpdatePreferences from './UpdatePrefernces.js';
import { useSelector } from 'react-redux';

const Profile = () => {
  const user = useSelector((state) => state.user.user.user.roleId.role);
  let isUser = true;
  if (user == 'admin') isUser = !isUser;
  return (
    <>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8
        }}
      >
        <Container maxWidth="lg">
          <Stack spacing={0}>
            <div>
              <Typography variant="h4">
                Profile
              </Typography>
            </div>

            <div>
              <Grid
                container
                spacing={3}
              >
                <Grid
                  xs={12}
                  md={6}
                  lg={4}
                >
                  <AccountProfiles />
                </Grid>


                <Grid
                  xs={10}
                  md={4}
                  lg={8}
                >
                  <AccountProfileDetails />
                </Grid>
                {isUser &&
                  <Grid
                    xs={20}
                    md={20}
                    lg={18}
                  >
                    <Typography variant="h4">
                      Update Preference
                    </Typography>
                    <UpdatePreferences />
                  </Grid>
                }
              </Grid>
            </div>
          </Stack>
        </Container>
      </Box>
    </>
  );
}



export default Profile;

