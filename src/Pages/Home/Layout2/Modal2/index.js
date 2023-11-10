import * as React from "react";
import PropTypes from "prop-types";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Stack from "@mui/material/Stack";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs(props) {
  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
        maxWidth="md"
        fullWidth
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={props.handleClose}
          variant={"h5"}
        >
          Machine details
        </BootstrapDialogTitle>
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} md={6}>
              <Paper>
                <Box sx={{ p: 2 }}>
                  <Typography varient="h4">Operator details</Typography>
                  <br />
                  <Typography sx={{ textAlign: "center" }}>
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTm7kEuK-5064Q5gbJVlyo9BSQtZOoeLW_K-Ek9VCgk&s"
                      width={200}
                    />
                  </Typography>
                  <Typography varient="h4" sx={{ textAlign: "center" }}>
                    Setha hallam
                  </Typography>
                  <br />
                  <br />
                
              
                   <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>User name: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>@serajohnson</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>EPF number: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>86467865</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Email: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>sarejahson@gmail.com</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Role: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>Project manager</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Shift: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>Day-shift</Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Contact: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>08383883 </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    
                  </Grid>
                </Box>
              </Paper>
            </Grid>
            <Grid item xs={12} md={6}>
              <Paper sx={{ height: "100%" }}>
                <Box p={2} sx={{ display: "-ms-inline-flexbox" }}>
                  <Typography varient="h4" mb={2}>Machine details</Typography>
                  <Grid container spacing={2}>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Quality: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>5j05368 </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Shift P2P: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography sx={{ color: "#1de9b6" }}><SentimentSatisfiedAltIcon /></Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Overall P2P: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography sx={{ color: "#1de9b6" }}><SentimentSatisfiedAltIcon /></Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>RPM: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>765 </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Efficiency: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>76% </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Meterage: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>244.1  </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                    <Grid item md={12}>
                      <Grid container spacing={2}>
                        <Grid item md={6}>
                          <Typography>Run time: </Typography>
                        </Grid>
                        <Grid item md={6}>
                        <Typography>18 h </Typography>
                        </Grid>
                      </Grid>
                      <Divider sx={{ mt:1}}/>
                    </Grid>
                  </Grid>

                  {/* <Grid container spacing={2}>
                    <Grid item xs={6} md={5}>
                      <List sx={{ ml: 2 }}>
                        <ListItem disablePadding>
                          <ListItemText primary="Overall P2P: " />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="RPM: " />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="Efficiency " />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary=" Meterage:" />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary=" Run time:" />
                        </ListItem>
                      </List>
                    </Grid>
                    <Grid item xs={6} md={7}>
                      <List sx={{ color: "text.secondary" }}>
                        <ListItem disablePadding>
                          <ListItemText primary="5j05368 " />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="Good" />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding sx={{ color: "#1de9b6" }}>
                          <ListItemText
                            primary={<SentimentSatisfiedAltIcon />}
                          />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="765 " />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="76%" />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="244.1 " />
                        </ListItem>
                        <Divider />
                        <ListItem disablePadding>
                          <ListItemText primary="18 h" />
                        </ListItem>
                      </List>
                    </Grid>
                  </Grid> */}
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
