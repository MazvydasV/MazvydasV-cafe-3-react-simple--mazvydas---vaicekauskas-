import * as React from 'react';
import { Box, Typography } from '@mui/material';
import * as Home from './components';

const HomePage = () => (
  <Box sx={{ height: '100vh', position: 'relative' }}>
    <Home.Background component="img" src="/background.jpg" />

    <Home.ContentContainer>
      <Home.Content component="main">
        <Typography
          component="h1"
          variant="h2"
          sx={(theme) => ({ letterSpacing: '0.08em', color: theme.palette.primary.main })}
        >
          Pramogos ne tik jauniems
        </Typography>

        <Typography variant="h6" sx={{ textAlign: 'center', color: 'red' }}>
          Tai yra tekstas apie įvairias pramogas kuriomis gali džiaugtis ne tik jaunimėlis,
          bet ir senimas. Šis backgroundas yra puikus pavyzdys kokio niekada nedėti.
        </Typography>

        <Box sx={{
          display: 'flex', gap: 3, height: 400,
        }}
        >
          <Home.ImageLink to="/pottery" src="/valentine.jpg">Šeimoms</Home.ImageLink>
          <Home.ImageLink to="/cup-shelf" src="/about.jpg">Pradedantiesiems sprogdintojams</Home.ImageLink>
        </Box>
      </Home.Content>
    </Home.ContentContainer>
  </Box>
);

export default HomePage;
