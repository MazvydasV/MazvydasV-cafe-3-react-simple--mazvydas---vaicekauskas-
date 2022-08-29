import * as React from 'react';
import { Box, Fade, Grid } from '@mui/material';
import CupService from 'services/cup-service';
import { useSearchParams } from 'react-router-dom';
import { Image } from 'components';
import wait from 'helpers/wait';
import { CupCard, Filters } from './components';

const drawerWidth = 280;

const CupShelfPage = () => {
  const [cups, setCups] = React.useState([]);
  const [loading, setLoading] = React.useState(false);
  const [searchParams] = useSearchParams();

  const handleFetchCups = React.useCallback(async () => {
    setLoading(true);
    const [fetchedCups] = await Promise.all([
      CupService.fetchAll(searchParams.toString()),
      wait(1000),
    ]);
    setLoading(false);
    setCups(fetchedCups);
  }, [searchParams]);

  const handleUpdateCup = async (props) => {
    await CupService.update(props);
    await handleFetchCups();
  };

  React.useEffect(() => {
    handleFetchCups();
  }, [handleFetchCups]);

  return (
    <Box sx={{
      display: 'flex',
      gap: { xs: 4, xxl: 0 },
      py: 2,
      px: 2,
    }}
    >
      <Filters drawerWidth={drawerWidth} />
      <Box sx={{ pl: { xxl: `${drawerWidth}px` }, width: '100%' }}>

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
            <Fade in>
              <Image src="/loading.gif" sx={{ width: 600, pt: 6 }} />
            </Fade>
          </Box>
        ) : (
          <Fade in>
            <Grid container spacing={2}>
              {cups.map(({
                id,
                title,
                description,
                img,
                price,
                currency,
                liked,
                category,
                materialType,
                color,
              }) => (
                <Grid key={id} item xs={12} sm={6} md={4} lg={3} xl={2.4}>
                  <CupCard
                    id={id}
                    title={title}
                    description={description}
                    img={img}
                    price={price}
                    currency={currency}
                    liked={liked}
                    category={category}
                    materialType={materialType}
                    color={color}
                    updateMug={handleUpdateCup}
                  />
                </Grid>
              ))}
            </Grid>
          </Fade>
        )}

      </Box>
    </Box>
  );
};

export default CupShelfPage;
