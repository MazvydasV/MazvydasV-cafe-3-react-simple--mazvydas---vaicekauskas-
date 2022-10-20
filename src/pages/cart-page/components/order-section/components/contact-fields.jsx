import React from 'react';
import {
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from '@mui/material';
import { TextFieldDark, DividerDark } from 'components/dark';

const genders = [
  { value: 'female', label: 'Atsiėmimas paštomate' },
  { value: 'male', label: 'Pristatymas kurjeriu' },
  { value: 'other', label: 'Atsiimti vietoje' },
];

const ContactFields = ({
  fullname,
  email,
  gender,
  setFullname,
  setEmail,
  setGender,
}) => (
  <>
    <DividerDark textAlign="left">Kontaktiniai duomenys</DividerDark>

    <TextFieldDark
      name="fullname"
      label="Vardas Pavardė"
      variant="filled"
      fullWidth
      onChange={(event) => setFullname(event.target.value)}
      value={fullname}
    />
    <TextFieldDark
      name="email"
      type="email"
      label="El. paštas"
      variant="filled"
      fullWidth
      onChange={(event) => setEmail(event.target.value)}
      value={email}
    />

    <FormControl sx={{ width: '100%' }}>
      <FormLabel sx={{ color: 'common.white' }}>Atsiėmimo būdas</FormLabel>
      <RadioGroup
        name="gender"
        value={gender}
        onChange={(_, newGender) => setGender(newGender)}
      >
        {genders.map(({ value, label }) => (
          <FormControlLabel key={value} value={value} control={<Radio sx={{ color: 'inherit' }} />} label={label} />
        ))}
      </RadioGroup>
    </FormControl>
  </>
);

export default ContactFields;
