import React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import { Box } from '@mui/material';

const itemData = [
  {
    img: 'https://armylife.lt/images/naujienos/29.jpg',
    title: 'Airsofteris',
  },
  {
    img: 'https://mfrontas.lt/wp-content/uploads/IMG_4513-1030x686.jpg',
    title: 'mfrontas',
  },
  {
    img: 'https://www.legionas.lt/wp-content/uploads/2022/01/dominik-sostmann-yuga4bazgWg-unsplash-1200x801.jpg',
    title: 'legionas',
  },
  {
    img: 'https://assets.geradovana.lt/files/uploaded/programs/29c3c7bbdba642f192fb1e9613e5704f.jpeg',
    title: 'musio frontas',
  },
  {
    img: 'https://rekvizitai.vz.lt/photos/musio_frontas-414.jpg',
    title: 'mfrontas',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmgpPBRZcNTX2zSYH0VUl4j6mmGK8HvsZxXw&usqp=CAU',
    title: 'pykst pokst',
  },
  {
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS--suEbaoUTsjgfkL2lpvDqneAbKJzCQZp63U2jHlsQSBUHyVkwcDKLFhbf1LxMCgTiqM&usqp=CAU',
    title: 'stirniai patvirtinta',
  },
  {
    img: 'https://rekvizitai.vz.lt/photos/musio_frontas-079.jpg',
    title: 'mfrontas',
  },
  {
    img: 'https://rekvizitai.vz.lt/photos/musio_frontas-551.jpg',
    title: 'mfrontas',
  },
  {
    img: 'https://popularairsoft.com/sites/default/files/import_files/heritage_airsoft.jpg',
    title: 'airsofters running',
  },
  {
    img: 'https://tacticalday.lt/wp-content/uploads/2020/05/airsoftbaner-1200x900.jpg',
    title: 'tactical day',
  },
  {
    img: 'https://tacticalday.lt/wp-content/uploads/2020/05/tactical-day-renginiai.jpg',
    title: 'breefing',
  },
];
const FunPage = () => (
  <Box sx={{ display: 'flex', justifyContent: 'center' }}>
    <ImageList sx={{ width: 700, height: { xs: 999, md: 750, xxl: 650 } }} cols={3} rowHeight={164}>
      {itemData.map((item) => (
        <ImageListItem key={item.img}>
          <img
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
  </Box>
);

export default FunPage;
