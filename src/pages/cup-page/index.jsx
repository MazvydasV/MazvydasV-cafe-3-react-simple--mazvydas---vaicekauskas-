import React from 'react';
import { useParams } from 'react-router-dom';
import CupService from 'services/cup-service';
import {
  Container,
  Alert,
} from '@mui/material';

const CupPage = () => {
  const { cupId } = useParams();
  const [cup, setCup] = React.useState(null);
  const [errorMsg, setErrorMsg] = React.useState(null);

  React.useEffect(() => {
    (async () => {
      try {
        const fetchedCup = await CupService.fetchById(cupId);
        setCup(fetchedCup);
      } catch (error) {
        setErrorMsg(`Nerastas produktas pagal id: '${cupId}'`);
      }
    })();
  }, [cupId]);

  return (
    <Container>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {cup && (<pre>{JSON.stringify(cup, null, 4)}</pre>)}
    </Container>
  );
};

export default CupPage;
