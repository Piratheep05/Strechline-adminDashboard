import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

export default function index(props) {
  return (
    <Box sx={{ minWidth: 100,textAlign:"center",backgroundColor:props.backcolor,p:1 ,borderRadius:2}} >
      {/* <CardContent sx={{p:0}}> */}
        <Typography sx={{ fontSize: 36}}>
          {props.Text1}
        </Typography>
        <Typography sx={{ fontWeight: 'bold' }} color="text.secondary">
        {props.Text2}
        </Typography>
      {/* </CardContent> */}
    </Box>
  );
}
