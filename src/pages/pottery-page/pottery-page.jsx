import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import ListSubheader from '@mui/material/ListSubheader';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';

const FunPage = () => (
  <ImageList sx={{ width: 500, height: 450 }}>
    <ImageListItem key="Subheader" cols={2}>
      <ListSubheader component="div">December</ListSubheader>
    </ImageListItem>
    {picsData.map((item) => (
      <ImageListItem key={item.img}>
        <img
          src={`${item.img}?w=248&fit=crop&auto=format`}
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.title}
          subtitle={item.author}
          actionIcon={(
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
              <InfoIcon />
            </IconButton>
            )}
        />
      </ImageListItem>
    ))}
  </ImageList>
);

const picsData = [
  {
    img: '/zapyskis1',
    title: 'Stirnių poligonas',
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    img: '/zapyskis2',
    title: 'Stirnių poligonas',
  },
  {
    img: 'zapyskis3',
    title: 'Zapyškio poligonas',
  },
  {
    img: 'zapyskis4',
    title: 'Zapyškio poligonas',
    cols: 2,
  },
];

export default FunPage;
