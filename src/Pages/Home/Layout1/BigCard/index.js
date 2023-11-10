import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import { Box, width } from '@mui/system';

export default function ActionAreaCard() {
  return (
    <Card sx={{ display: 'flex', borderRadius: 3 }}>
      <CardActionArea>
        <CardContent>
          <Typography gutterBottom variant='h5' component='div'>
            Instructions sheet
          </Typography>
          <Box sx={{ textAlign: 'center' }}>
            <img
              src={`${'/assets/pdf/Instruction sheet-1.jpg'}`}
              style={{ width: '100%' }}
            />
          </Box>
          {/* <Typography variant="h6" color="text.secondary" textAlign={"center"}>
            Here is the Instruction sheet in this PDF. click here Watch it..
          </Typography>
          <Typography variant="h6" color="text.secondary" textAlign={"center"}>
            Watch it..
          </Typography> */}
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
