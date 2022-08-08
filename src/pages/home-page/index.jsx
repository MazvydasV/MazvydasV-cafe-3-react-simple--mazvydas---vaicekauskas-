import * as React from 'react';
import { Box, Typography } from '@mui/material';
import * as Home from './components';

const HomePage = () => (
  <Box sx={{
    minHeight: '100vh',
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  }}
  >
    <Home.Background component="img" src="/background.jpg" />

    <Home.ContentContainer>
      <Home.Content component="main">
        <Typography
          component="h1"
          variant="h2"
          sx={(theme) => ({
            letterSpacing: '0.1em',
            color: theme.palette.primary.main,
            fontSize: { xs: '2rem', md: '2.5rem' },
            textAlign: 'center',
          })}
        >
          Pramogos ne tik jauniems
        </Typography>

        <Typography
          variant="h5"
          sx={{
            textAlign: 'center',
            color: 'yellow',
            fontSize: { xs: '1rem', md: '1.2rem' },
          }}
        >
          Tai yra tekstas apie įvairias pramogas kuriomis gali džiaugtis ne tik jaunimėlis,
          bet ir senimas. Šis backgroundas yra puikus pavyzdys kokio niekada nedėti.
        </Typography>

        <Box sx={{
          display: 'flex',
          gap: 5,
          height: { xs: 200, md: 300, xxl: 400 },
          justifyContent: 'center',
        }}
        >
          <Home.ImageLink to="/family" src="/valentine.jpg">Šeimoms</Home.ImageLink>
          <Home.ImageLink to="/bomber" src="/about.jpg">Pradedantiesiems sprogdintojams</Home.ImageLink>
        </Box>
      </Home.Content>
    </Home.ContentContainer>
  </Box>
);

export default HomePage;
