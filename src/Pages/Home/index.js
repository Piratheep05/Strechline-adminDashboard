import React from "react";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import { Typography } from "@mui/material";
import Layout1 from "./Layout1";
import Layout2 from "./Layout2";

const Item = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  cursor: "pointer",
  height: "100%",
}));

export default function Landing(props) {

 
  return (
    <>
      <Grid container spacing={0}>
        <Grid item md={9.5} xs={12}>
          <Layout1 />
        </Grid>
        <Grid item md={2.5} xs={12} >
          <Layout2 />
        </Grid>
      </Grid>
    </>
  );
}
