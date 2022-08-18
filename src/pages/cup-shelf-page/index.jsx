import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { CupCard, Filters } from './components';

const drawerWidth = 280;

const updateMug = async ({ id, ...updateProps }) => {
  const response = await fetch(`http://localhost:8000/mugs/${id}`, {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(updateProps),
  });
  const responseData = await response.json();

  return responseData;
};

const fetchAllMugs = async () => {
  const response = await fetch('http://localhost:8000/mugs');
  const mugs = await response.json();

  return mugs;
};

const CupShelfPage = () => {
  const [mugs, setMugs] = React.useState([]);

  const handleFetchMugs = async () => {
    const fetchedMugs = await fetchAllMugs();
    setMugs(fetchedMugs);
  };

  const handleUpdateMug = async (props) => {
    await updateMug(props);
    await handleFetchMugs();
  };

  React.useEffect(() => { handleFetchMugs(); }, []);

  return (
    <Box sx={{
      display: 'flex',
      gap: { xs: 4, xxl: 0 },
      py: 2,
      px: 2,
    }}
    >
      <Filters drawerWidth={drawerWidth} />
      <Grid container spacing={2} sx={{ pl: { xxl: `${drawerWidth}px` } }}>
        {mugs.map(({
          id,
          title,
          description,
          img,
          category,
          liked,
        }) => (
          <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
            <CupCard
              id={id}
              title={title}
              description={description}
              img={img}
              category={category}
              liked={liked}
              updateMug={handleUpdateMug}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CupShelfPage;
