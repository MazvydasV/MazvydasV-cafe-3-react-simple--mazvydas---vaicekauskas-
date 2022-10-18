import * as React from 'react';
import { Box, Typography } from '@mui/material';
import * as Home from './components';

const HomePage = () => (
  <Box sx={(theme) => ({
    minHeight: `calc(100vh - ${theme.mixins.navbar.height})`,
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
  })}
  >
    <Home.Background component="img" src="/toy-gun.jpg" />

    <Home.ContentContainer>
      <Home.Content component="main">
        <Typography
          component="h1"
          variant="h2"
          sx={(theme) => ({
            letterSpacing: '0.08em',
            color: theme.palette.secondary.main,
            textAlign: 'center',
            fontSize: { xs: '2.25rem', md: '3.5rem' },
          })}
        >
          Airsoft daikčiukų turgelis
        </Typography>

        <Typography
          variant="h6"
          sx={{
            textAlign: 'center',
            fontSize: { xs: '1.1rem', md: '1.3rem' },
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum tempora explicabo nostrum
          accusantium dolor dolores illo minus suscipit aliquam, inventore voluptate consectetur
          omnis labore, laboriosam accusamus! Deserunt mollitia doloribus laboriosam enim ut,
          numquam cumque quisquam tenetur maiores officiis autem necessitatibus magnam voluptate
          ipsa eveniet sequi neque in porro rem facere!
        </Typography>

        <Box sx={{
          display: 'flex',
          justifyContent: 'center',
          gap: 3,
          height: { xs: 200, md: 300, xxl: 400 },
        }}
        >
          <Home.ImageLink to="/pottery" src="/valentine.jpg">Akimirkos</Home.ImageLink>
          <Home.ImageLink to="/cup-shelf" src="/little_soldier.jpg">Daikčiukai</Home.ImageLink>
        </Box>
      </Home.Content>
    </Home.ContentContainer>
  </Box>
);

export default HomePage;
