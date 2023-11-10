import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, CardActionArea } from "@mui/material";
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
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
            position: 'absolute',
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

export default function ActionAreaCard() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
    <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        // 
        fullWidth
        maxWidth="md"
      >
        <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose} variant={"h5"}>
          Defect image
        </BootstrapDialogTitle>
        <DialogContent >
        <Box sx={{ justifyContent:"center" ,width:"100%", display:"flex ",p:1 }}>
          <img
            // component="img"
            // height="350"
            // width="100%"
            src="/assets/defect.jpg"
            style={ {width:"100%"}}
          />
        </Box>
        </DialogContent>
        {/* <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Save changes
          </Button>
        </DialogActions> */}
      </BootstrapDialog>

    <Card sx={{ display: "flex", borderRadius: 3, height: "100%", p: 2 }}>
      <CardActionArea>
        <CardContent>
          <Box sx={{ justifyContent: "space-between", display: "flex" }}>
            <Typography gutterBottom variant="h5" sx={{ml:-2,mt:-2}}>
              Original combo
            </Typography>
            <Typography sx={{mr:-2,mt:-2}}>
              <Button variant="contained" onClick={handleClickOpen} >Defect image</Button>
            </Typography>
          </Box>
        </CardContent>

        <Box>
          <CardMedia
            component="img"
            height="130"
            image="/assets/orgin.jpg"
            alt="green iguana"
          />
        </Box>
      </CardActionArea>
    </Card>
    </>
  );
}
