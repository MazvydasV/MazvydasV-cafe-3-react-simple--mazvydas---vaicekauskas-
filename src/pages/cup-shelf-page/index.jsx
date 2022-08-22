import * as React from 'react';
import { Box, Grid } from '@mui/material';
import { CupCard, Filters } from './components';

const drawerWidth = 280;

const updateItem = async ({ id, ...updateProps }) => {
  const response = await fetch(`http://localhost:8888/items/${id}`, {
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

const fetchAllItems = async () => {
  const response = await fetch('http://localhost:8888/items');
  const items = await response.json();

  return items;
};

const CupShelfPage = () => {
  const [items, setItems] = React.useState([]);

  const handleFetchItems = async () => {
    const fetchedItems = await fetchAllItems();
    setItems(fetchedItems);
  };

  const handleUpdateItem = async (props) => {
    await updateItem(props);
    await handleFetchItems();
  };

  React.useEffect(() => { handleFetchItems(); }, []);

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
        {items.map(({
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
              updateItem={handleUpdateItem}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default CupShelfPage;
