import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import MoreVertIcon from "@mui/icons-material/MoreVert";
// import Modal1 from "../Modal1";

export default function RecipeReviewCard(props) {
 
  return (
    <>
     
      <Card
        variant="outlined"
        sx={{ borderRadius: 1, maxHeight: 60, bgcolor: "#dcedc8" }}
        // onClick={handleClickOpen}
      >
        <Typography
          sx={{
            textAlign: "center",
            color: "black",
            fontSize: 25,
            p: 1,
            fontWeightMedium: 1300,
          }}
        >
          {props.text}
        </Typography>
      </Card>
    </>
  );
}
