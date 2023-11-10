import * as React from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { Button, Typography } from '@mui/material';
import CardMedia from '@mui/material/CardMedia';
import SmallCard1 from './SmallCard1';
import SmallCard2 from './SmallCard2';
import Modal1 from './Modal1';
import Modal2 from './Modal2';
import Card from '@mui/material/Card';

export default function Variants() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

  return (
    <>
      <Modal1 handleClose={handleClose} open={open} />
      <Modal2 handleClose={handleClose2} open={open2} />
      <Box>
        <Paper variant='outlined' sx={{}}>
          <Box sx={{ p: 1 }}>
            <Paper sx={{ backgroundColor: '#F5634A', height: 130 }}>
              <Typography
                sx={{ textAlign: 'center', color: 'black', p: 2, fontSize: 30 }}
              >
                ALTERATION
              </Typography>
              <Typography
                sx={{
                  textAlign: 'center',
                  color: '#616161',
                  mt: -2,
                  p: 0.1,
                  fontSize: 17,
                }}
              >
                MACHINE STATUS
              </Typography>
              <Typography sx={{
                  textAlign: "center",
                  color: "#616161",
                  
                  p: 0.1,
                  fontSize: 17,
                }}>
                S_04
              </Typography>
            </Paper>
          </Box>
          {/* <br /> */}
          <Box sx={{ flexGrow: 1, p: 1 }} display='grid' gap={2}>
            <>
              <Card
                variant='outlined'
                sx={{ borderRadius: 1, maxHeight: 60, bgcolor: '#dcedc8' }}
                onClick={handleClickOpen2}
              >
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 25,
                    p: 1,
                    fontWeightMedium: 1300,
                  }}
                >
                  Machine details
                </Typography>
              </Card>
            </>
            <>
              <Card
                variant='outlined'
                sx={{ borderRadius: 1, maxHeight: 60, bgcolor: '#dcedc8' }}
                onClick={handleClickOpen}
              >
                <Typography
                  sx={{
                    textAlign: 'center',
                    color: 'black',
                    fontSize: 25,
                    p: 1,
                    fontWeightMedium: 1300,
                  }}
                >
                  Elastic specification
                </Typography>
              </Card>
            </>

            {/* <SmallCard2 text={"Elastic Specification"} /> */}
            <SmallCard1 />
            <SmallCard1 />
            <SmallCard1 />
            <SmallCard1 />
          </Box>
          <Box
            sx={{
              justifyContent: 'center',
              width: '100%',
              display: 'flex ',
              mt: 3,
              mb: 2,
            }}
          >
            <Box width={'200px'} height={'200px'} sx={{ backgroundColor:"#ffffff"}}>
              <CardMedia
                component='img'
                height='100%'
                width='100%'
                image='/assets/Qr.png'
                alt='Paella dish'
                // sx={{p:1,height:"150px"}}
              />
            </Box>
          </Box>
        </Paper>
      </Box>
    </>
  );
}
