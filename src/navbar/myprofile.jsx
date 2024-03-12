// import React from "react";
import "./myprofile.css";
import { Button, TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import SourceIcon from '@mui/icons-material/Source';

const Profile = () => {
  return (
    <div className="profile-outerDiv">
      <Box className="profile" sx={{ width: "100%" }}>
        <Grid container direction="row" spacing={1}>
          <Grid xs="6" md="4" className="main-profile-wrapper">
            <Paper elevation={2} square>
              <div className="main-profile">
                <div className="main-profile-details">
                  <p className="main-profile-avatar">
                    <Avatar
                      sx={{ bgcolor: "#3B9932", width: 56, height: 56 }}
                      variant="rounded"
                    >
                      HG
                    </Avatar>
                  </p>
                </div>
                <div className="main-profile-details">
                  <p className="main-profile-cotent">Name: Het Gajjar</p>

                  <p className="main-profile-cotent">Email: abc@gmail.com</p>

                  <p className="main-profile-cotent">Designation: Intern</p>
                </div>
              </div>
            </Paper>
            <Paper elevation={2} square>
              <div className="main-profile-details">
                <p className="main-profile-cotent"> Project Status </p>
                <div className="main-profile-details">
                  <div className="main-profile-cotent-wrapper">
                    <p className="main-profile-cotent"><SourceIcon /> #project-1</p>
                    <div
                      style={{
                        height: "5px",
                        width: "50%",
                        backgroundColor: "#3B9932",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "100%",
                        marginBottom: "1em",
                        backgroundColor: "#5dacbd",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                    ></div>
                  </div>
                  <div className="main-profile-cotent-wrapper">
                    <p className="main-profile-cotent"><SourceIcon /> #project-2</p>
                    <div
                      style={{
                        height: "5px",
                        width: "20%",
                        backgroundColor: "#3B9932",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "100%",
                        marginBottom: "1em",
                        backgroundColor: "#5dacbd",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                    ></div>
                  </div>
                  <div className="main-profile-cotent-wrapper">
                    <p className="main-profile-cotent"><SourceIcon /> #project-3</p>
                    <div
                      style={{
                        height: "5px",
                        width: "60%",
                        backgroundColor: "#3B9932",
                        borderTopLeftRadius: "5px",
                        borderTopRightRadius: "5px",
                      }}
                    ></div>
                    <div
                      style={{
                        height: "5px",
                        width: "100%",
                        marginBottom: "1em",
                        backgroundColor: "#5dacbd",
                        borderBottomLeftRadius: "5px",
                        borderBottomRightRadius: "5px",
                      }}
                    ></div>
                  </div>
                </div>
              </div>
            </Paper>
          </Grid>
          <Grid xs="6" md="4" className="main-profile-wrapper">
            <form>
              <Paper elevation={2} square>
                <div id="update-content-wrapper">
                  <label className="label">Edit Profile</label>
                  <div id="update-content">
                    <TextField
                      label="Edit Name"
                      id="filled-size-small"
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="Edit Email"
                      id="filled-size-small"
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      label="Edit Password"
                      id="filled-size-small"
                      variant="filled"
                      size="small"
                    />
                    <TextField
                      type="password"
                      label="Confirm Password"
                      id="filled-size-small"
                      variant="filled"
                      size="small"
                    />
                  </div>
                  <div id="update-content-button">
                    <div>
                      <Button variant="contained" type="reset">
                        Reset
                      </Button>
                      <Button
                        style={{ marginLeft: "35px" }}
                        variant="contained"
                        onClick={() => {
                          confirm("Press Ok to Update User Details.");
                        }}
                      >
                        Update
                      </Button>
                    </div>
                  </div>
                </div>
              </Paper>
            </form>
          </Grid>
          <Grid xs="6" md="4" className="main-profile-wrapper">
            <Paper elevation={2} square>
              <div className="main-profile">
                <div className="main-profile-details">
                  {/* <p className="main-profile-cotent">Name: Het Gajjar</p> */}
                </div>
              </div>
            </Paper>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
};
export default Profile;