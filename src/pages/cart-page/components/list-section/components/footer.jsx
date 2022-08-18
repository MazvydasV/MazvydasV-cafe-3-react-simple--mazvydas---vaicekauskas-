import React from 'react';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Footer = ({ total }) => {
  const navigate = useNavigate();

  return (
    <Box sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      mt: 8,
      pr: { xs: 8, md: 10 },
    }}
    >
      <Box>
        <Button variant="contained" color="secondary" onClick={() => navigate('/cup-shelf')}>
          <KeyboardBackspaceIcon sx={{ mr: 2 }} />
          <Typography>Atgal į parduotuvę</Typography>
        </Button>
      </Box>

      {total > 0 && (
        <Box sx={{ display: 'flex', justifyContent: 'flex-end' }}>
          <Typography variant="h6" sx={{ pr: 1 }}>Viso:</Typography>
          <Typography variant="h6">{`${total.toFixed(2)}€`}</Typography>
        </Box>
      )}
    </Box>
  );
};

export default Footer;
