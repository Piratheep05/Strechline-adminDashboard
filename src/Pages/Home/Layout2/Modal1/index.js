import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';


function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 1 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

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
          aria-label='close'
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

export default function CustomizedDialogs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
      <BootstrapDialog
        onClose={props.handleClose}
        aria-labelledby='customized-dialog-title'
        open={props.open}
        maxWidth='lg'
      >
        <DialogContent>
          <Box p={1}>
          <BootstrapDialogTitle id="customized-dialog-title" onClose={props.handleClose} variant={"h5"}>
          Elastic specification
        </BootstrapDialogTitle>
            {/* <Typography sx={{ fontSize: 30 }} mb={3}>
              Elastic Specification
            </Typography> */}

            <Box sx={{ width: '100%' }}>
              <Box sx={{  borderColor: 'divider' }}>
                <Tabs
                  value={value}
                  onChange={handleChange}
                  aria-label='basic tabs example'
                >
                  <Tab label=' SHEET 1' {...a11yProps(0)} />
                  <Tab label='SHEET 2' {...a11yProps(1)} />
                </Tabs>
              </Box>
              <TabPanel value={value} index={0}>
                <Box sx={{}}>
                  <img
                   
                    src={`${'/assets/pdf/Elastic spec sheet page 1.jpg'}`}
                    style={{ width: '100%' }}
                  />
                </Box>
              </TabPanel>
              <TabPanel value={value} index={1}>
                <Box>
                  <img
                     src={`${'/assets/pdf/Elastic spec sheet page 2.jpg'}`}
                    style={{ width: '100%' }}
                  />
                </Box>
              </TabPanel>
            </Box>
          </Box>
        </DialogContent>
      </BootstrapDialog>
    </div>
  );
}
