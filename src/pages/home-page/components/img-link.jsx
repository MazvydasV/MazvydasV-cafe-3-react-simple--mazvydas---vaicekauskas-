import * as React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { Typography, styled } from '@mui/material';
import { Image } from '../../../components';

const Link = styled(RouterLink)({
  textDecoration: 'none',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const ImageLink = ({ to, src, children }) => {
  const containerRef = React.useRef(null);
  const headerRef = React.useRef(null);
  const [imgHeight, setImgHeight] = React.useState(0);

  React.useLayoutEffect(() => {
    const handleImgHeightChange = () => {
      const containerHeight = containerRef.current.getBoundingClientRect().height;
      const headerHeight = headerRef.current.getBoundingClientRect().height;

      setImgHeight(containerHeight - headerHeight);
    };

    handleImgHeightChange();
    window.addEventListener('resize', handleImgHeightChange);

    return () => {
      window.removeEventListener('resize', handleImgHeightChange);
    };
  }, []);

  return (
    <Link to={to} ref={containerRef}>
      <Typography
        variant="h4"
        sx={(theme) => ({
          textAlign: 'center',
          color: theme.palette.primary.main,
          fontSize: { xs: '1.4rem', md: '2rem' },
        })}
        ref={headerRef}
      >
        {children}
      </Typography>
      <Image src={src} sx={{ height: imgHeight, width: 'auto' }} />
    </Link>
  );
};

export default ImageLink;
