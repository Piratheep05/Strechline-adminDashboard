import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";

export default function BasicCard() {
  const [checked1, setChecked1] = React.useState(true);
  const [checked2, setChecked2] = React.useState(false);
  const [checked3, setChecked3] = React.useState(true);

  const handleChange1 = (event) => {
    setChecked1(event.target.checked);
  };

  const handleChange2 = (event) => {
    setChecked2(event.target.checked);
  };
  const handleChange3 = (event) => {
    setChecked3(event.target.checked);
  };

  return (
    <Card sx={{ display: "flex", borderRadius: 3, height: "100%" }}>
      <CardContent>
        <Typography sx={{ mb: 0.5, p: 1,mt:-1 }} variant="h5">
          Production types
        </Typography>
        <Box sx={{ p: 1 }}>
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              Mini bulk
            </Typography>
            <Typography sx={{ mt: -1 }}>
              <Checkbox
                checked={checked1}
                onChange={handleChange1}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Typography>
          </Box>
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              Pilot
            </Typography>
            <Typography sx={{ mt: -1 }}>
              <Checkbox
                checked={checked2}
                onChange={handleChange2}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Typography>
          </Box>
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <Typography
              sx={{ fontSize: 16 }}
              color="text.secondary"
              gutterBottom
            >
              Launch orders
            </Typography>
            <Typography sx={{ mt: -1 }}>
              <Checkbox
                checked={checked3}
                onChange={handleChange3}
                inputProps={{ "aria-label": "controlled" }}
              />
            </Typography>
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}
