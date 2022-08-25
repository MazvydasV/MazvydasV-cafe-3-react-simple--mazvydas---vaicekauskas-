import React from 'react';
import {
  Box,
  Typography,
  Slider,
  FormControl,
} from '@mui/material';

const RangeField = ({
  label,
  value,
  onChange,
  min = 0,
  max = 100,
}) => (
  <FormControl sx={{ width: '100%' }}>
    <Typography variant="h6">{label}</Typography>
    <Box sx={{ mx: 2 }}>
      <Slider
        value={value}
        min={min}
        max={max}
        // onChangeCommitted={(_, newPriceRange) => setPriceRange(newPriceRange)}
        onChange={onChange}
        valueLabelDisplay="on"
        sx={{ mt: 4 }}
      />
    </Box>
  </FormControl>
);

export default RangeField;
