/* eslint-disable import/no-unresolved */
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import { useParams } from 'react-router-dom';
import CupService from 'services/cup-service';
import {
  Paper,
  Container,
  Alert,
  Typography,
  IconButton,
  Box,
  styled,
} from '@mui/material';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import { Image } from 'components';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MySwiper = styled(Swiper)(({ theme }) => ({
  '.swiper-pagination-bullet-active': {
    backgroundColor: theme.palette.primary.main,
  },
}));

const CupPage = () => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
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
    <Container sx={{ mt: 2 }}>
      {errorMsg && (<Alert severity="error">{errorMsg}</Alert>)}
      {cup && (
        <Paper sx={{ p: 3, width: 320 }} elevation={4}>
          <MySwiper
            modules={[Navigation, Pagination]}
            pagination={{
              dynamicBullets: true,
            }}
            navigation={{
              prevEl: navigationPrevRef.current,
              nextEl: navigationNextRef.current,
            }}
          >
            {cup.images.map((image) => (
              <SwiperSlide key={image}>
                <Box sx={{ width: 320, height: 320 }}>
                  <Image src={image} sx={{ width: 320, height: 290 }} />
                </Box>
              </SwiperSlide>
            ))}
            <IconButton
              ref={navigationPrevRef}
              sx={{
                position: 'absolute', top: '45%', left: 0, zIndex: 7000,
              }}
            >
              <ArrowCircleLeftIcon color="primary" sx={{ fontSize: 32 }} />
              <Box sx={{
                bgcolor: 'common.white',
                borderRadius: '50%',
                position: 'absolute',
                height: '50%',
                width: '50%',
                zIndex: -1,
              }}
              />
            </IconButton>

            <IconButton
              ref={navigationNextRef}
              sx={{
                position: 'absolute', top: '45%', right: 0, zIndex: 7000,
              }}
            >
              <ArrowCircleRightIcon color="primary" sx={{ fontSize: 32 }} />
              <Box sx={{
                bgcolor: 'common.white',
                borderRadius: '50%',
                position: 'absolute',
                height: '50%',
                width: '50%',
                zIndex: -1,
              }}
              />
            </IconButton>
          </MySwiper>

          <Typography>{cup.title}</Typography>
        </Paper>
      )}
    </Container>
  );
};

export default CupPage;
