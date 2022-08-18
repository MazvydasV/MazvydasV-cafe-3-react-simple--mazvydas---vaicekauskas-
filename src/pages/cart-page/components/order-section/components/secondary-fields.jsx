import React from 'react';
import {
  Box,
  MenuItem,
  FormControlLabel,
  Checkbox,
} from '@mui/material';
import { TextFieldDark, DividerDark } from '../../../../../components/dark';

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  },
];

const SecondaryFields = ({
  currency,
  subscribtion,
  setCurrency,
  setSubscribtion,
}) => (
  <>
    <DividerDark textAlign="left">Pirkimo informacija</DividerDark>

    <TextFieldDark
      name="currency"
      select
      label="Currency"
      variant="filled"
      onChange={(event) => setCurrency(event.target.value)}
      value={currency}
      fullWidth
    >
      {currencies.map(
        ({ value, label }) => <MenuItem key={value} value={value}>{label}</MenuItem>,
      )}
    </TextFieldDark>

    <Box sx={{ alignSelf: 'flex-start' }}>
      <FormControlLabel
        control={(
          <Checkbox
            checked={subscribtion}
            onChange={(_, newSubsribtion) => setSubscribtion(newSubsribtion)}
            sx={{ color: 'inherit' }}
          />
        )}
        label="Siųsti naujausius pasiūlymus"
      />
    </Box>
  </>
);

export default SecondaryFields;
