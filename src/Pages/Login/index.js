import React, { useState } from "react";
import { grey } from "@mui/material/colors";
import Grid from "@mui/material/Grid";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useTheme } from "@mui/material/styles";
import { setToken, setUserDetails, setUserPermissions } from "../../helpers";
import { login, getUser, getUserPermissions } from "../../api/user";
import { FormLabel } from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import OutlinedInput from "@mui/material/OutlinedInput";

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  "label + &": {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.mode === "#2b2b2b",
    border: "1px solid #ced4da",
    fontSize: 16,
    placeholderColor: "white",
    // width: 'auto',
    padding: "10px 12px",
    transition: theme.transitions.create([
      "border-color",
      "background-color",
      "box-shadow",
    ]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
      borderColor: theme.palette.primary.main,
    },
  },
}));

const textFieldStyle = {
  "&:hover .MuiOutlinedInput-root .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "white",
  },
};

function Login(props) {
  const theme = useTheme();

  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [errorMessage, setErrorMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (event) => {
    setCredentials((prev) => {
      return {
        ...prev,
        [event.target.name]: event.target.value,
      };
    });
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    if (credentials.email === "" || credentials.password === "") {
      setErrorMessage("Please fill all the fields");
      return;
    }

    try {
      // setLoading(true);
      // const { data } = await login(credentials);
      // setToken(data);
      // const { data: userDetails } = await getUser();
      // const { data: userPermissions } = await getUserPermissions();
      setUserDetails({ username: "test" });
      setUserPermissions({ username: "test" });
      setToken("test");

      window.location.href = "/home";
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setErrorMessage(
        error.response ? "Invalid Username or Password" : error.message
      );
    }
  };

  return (
    <Grid container component="main" sx={{ height: "100vh" }}>
      <CssBaseline />
      <Grid item xs={12} sm={6} md={6}>
        <Box
          width="100%"
          height="100%"
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{ background: "#000" }}
        >
          <Box
            p={4}
            sx={{
              width: 500,
              [theme.breakpoints.down("md")]: {
                width: "100%",
              },
            }}
          >
            <Box mb={3}>
              <Typography
                variant="h4"
                sx={{
                  fontWeight: theme.typography.fontWeightBold,
                  color: "white",
                }}
                align="center"
              >
                Stretchline
              </Typography>
            </Box>
            <Box my={5}>
              <Typography variant="h6" sx={{ color: "#646A78" }} align="center">
                USER LOGIN
              </Typography>
            </Box>
            <form noValidate onSubmit={handleLogin}>
              {errorMessage !== "" ? (
                <Alert severity="error">{errorMessage}</Alert>
              ) : (
                ""
              )}
              <Box>
                <FormLabel sx={{ color: "white" }}> User Name</FormLabel>
                <BootstrapInput
                  placeholder="User Name"
                  id="bootstrap-input"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  // label='Username'
                  name="email"
                  autoFocus
                  value={credentials.email}
                  onChange={handleChange}
                  //
                  sx={{ borderColor: "white", color: "white" }}
                />
                <br />
                <br />

                <FormLabel sx={{ color: "white" }}> Password</FormLabel>
                <BootstrapInput
                  placeholder="Password"
                  variant="outlined"
                  margin="normal"
                  fullWidth
                  name="password"
                  // label="Password"
                  type="password"
                  value={credentials.password}
                  onChange={handleChange}
                  // sx={textFieldStyle}
                  sx={{ borderColor: "white", color: "white" }}
                />
              </Box>
              <br />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                sx={{
                  margin: theme.spacing(3, 0, 2),
                  backgroundColor: "#5048e5",
                  "&:hover": {
                    backgroundColor: "rgb(76,68,228)",
                  },
                }}
                disabled={loading}
              >
                Log In
              </Button>
            </form>
          </Box>
        </Box>
      </Grid>
      <Grid item xs={false} sm={6} md={6} style={{ background: "#20314E" }}>
        <div
          style={{
            backgroundImage: "url(/login-image.png)",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%",
            height: "100%",
          }}
        />
      </Grid>
    </Grid>
  );
}

export default Login;
