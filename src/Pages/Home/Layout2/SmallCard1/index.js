import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";

export default function RecipeReviewCard() {
  return (
    <Card variant="outlined" sx={{  borderRadius: 3,maxHeight:60 }}>
      <CardHeader
      sx={{p:1}}
        avatar={
          <Avatar sx={{ bgcolor: "#1de9b6"}} aria-label="recipe">
            W
          </Avatar>
        }
        title="Add waste type"
        subheader={<Typography sx={{color:"#1de9b6",fontSize:12}}>Wasste type & quantity</Typography>}
      />
    </Card>
  );
}
