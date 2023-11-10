import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import SmallCard from './SmallCard';
import Grid from '@mui/material/Grid';
import MediumCard1 from './MediumCard1';
import MediumCard2 from './MediumCard2';
import BigCard from './BigCard';

export default function index() {
  return (
    <Box p={2}>
      <Grid container alignItems='stretch' spacing={2}>
        <Grid item md={2.4} xs={12}>
          <SmallCard Text1={765} Text2={'RPM'} backcolor={'#54BF8E'} />
        </Grid>
        <Grid item md={2.4} xs={12}>
          <SmallCard Text1={'76%'} Text2={'EFFICIENCY'} backcolor={'#F7C560'} />
        </Grid>
        <Grid item md={2.4} xs={12}>
          <SmallCard Text1={244.1} Text2={'METERAGE'} backcolor={'#54BF8E'} />
        </Grid>
        <Grid item md={2.4} xs={12}>
          <SmallCard Text1={10} Text2={'WARP BREAKAGE'} backcolor={'#FE5869'} />
        </Grid>
        <Grid item md={2.4} xs={12}>
          <SmallCard Text1={12} Text2={'WEFT BREAKAGE'} backcolor={'#54BF8E'} />
        </Grid>
        <Grid item md={8} xs={12}>
          <MediumCard1 />
        </Grid>
        <Grid item md={4} xs={12}>
          <MediumCard2 />
        </Grid>
        <Grid item md={12} xs={12}>
          <BigCard />
        </Grid>
      </Grid>
    </Box>
  );
}
