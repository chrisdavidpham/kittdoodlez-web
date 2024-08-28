import * as React from 'react';
import Masonry from '@mui/lab/Masonry';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import IconButton from '@mui/material/IconButton';
import InfoIcon from '@mui/icons-material/Info';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import cartStyle from '../cart/CartStyle';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import Alert from '@mui/material/Alert';
import { Check } from '@mui/icons-material';
import CircularProgress from '@mui/material/CircularProgress';

export default function Store() {
  const [open, setOpen] = React.useState(false);
  const [adding, setAdding] = React.useState(false);
  const [added, setAdded] = React.useState(false);
  const [itemIndex, setItemIndex] = React.useState(0);
  const addToCart = () => {
    setAdding(true);
    setTimeout(() => {
      setAdding(false);
      setAdded(true);
    }, 1000);
  }

  return (
    <Box width={1}>
      <Masonry columns={{ xs: 1, sm: 2, md: 3, lg: 4, xl: 5 }} >
        {
          itemData.map((item, index) => (

            <ImageListItem key={item.img} sx={{ p: '10px' }}>
              <img
                srcSet={`${item.img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                src={`${item.img}?w=200&h=200&fit=crop&auto=format`}
                alt={item.title}
                loading="lazy"
              />
              <ImageListItemBar
                title={item.title}
                subtitle={item.author}
                actionIcon={
                  <IconButton size='large' onClick={() => {
                    setItemIndex(index);
                    setOpen(true);
                  }}>
                    <InfoIcon fontSize='large' />
                  </IconButton>
                }
              />
              <Modal
                open={open}
                onClose={() => {
                  setOpen(false);
                  setAdded(false);
                }}
              >
                <Box sx={cartStyle}>
                  <Typography variant="h3">Buy {itemData[itemIndex].title}</Typography>
                  <img
                    srcSet={`${itemData[itemIndex].img}?w=200&h=200&fit=crop&auto=format&dpr=2 2x`}
                    src={`${itemData[itemIndex].img}?w=200&h=200&fit=crop&auto=format`}
                    alt={itemData[itemIndex].title}
                    loading="lazy"
                  />
                  <IconButton sx={{ visibility: adding ? 'hidden' : 'visible' }} size='large' onClick={() => addToCart()}>
                    <AddShoppingCartIcon fontSize='large' />
                  </IconButton>
                  <CircularProgress sx={{ visibility: adding ? 'visible' : 'hidden' }} />
                  <Alert sx={{ visibility: added ? 'visible' : 'hidden' }} icon={<Check fontSize="inherit" />} severity="success" onClose={() => setAdded(true)}>
                    Added to cart!
                  </Alert>
                </Box>
              </Modal>
            </ImageListItem>
          ))
        }
      </Masonry >
    </Box>
  );
}

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1551963831-b3b1ca40c98e',
    title: 'Breakfast',
    author: '@bkristastucchio',
  },
  {
    img: 'https://images.unsplash.com/photo-1551782450-a2132b4ba21d',
    title: 'Burger',
    author: '@rollelflex_graphy726',
  },
  {
    img: 'https://images.unsplash.com/photo-1522770179533-24471fcdba45',
    title: 'Camera',
    author: '@helloimnik',
  },
  {
    img: 'https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c',
    title: 'Coffee',
    author: '@nolanissac',
  },
  {
    img: 'https://images.unsplash.com/photo-1533827432537-70133748f5c8',
    title: 'Hats',
    author: '@hjrc33',
  },
  {
    img: 'https://images.unsplash.com/photo-1558642452-9d2a7deb7f62',
    title: 'Honey',
    author: '@arwinneil',
  },
  {
    img: 'https://images.unsplash.com/photo-1516802273409-68526ee1bdd6',
    title: 'Basketball',
    author: '@tjdragotta',
  },
  {
    img: 'https://images.unsplash.com/photo-1518756131217-31eb79b20e8f',
    title: 'Fern',
    author: '@katie_wasserman',
  },
  {
    img: 'https://images.unsplash.com/photo-1597645587822-e99fa5d45d25',
    title: 'Mushrooms',
    author: '@silverdalex',
  },
  {
    img: 'https://images.unsplash.com/photo-1567306301408-9b74779a11af',
    title: 'Tomato basil',
    author: '@shelleypauls',
  },
  {
    img: 'https://images.unsplash.com/photo-1471357674240-e1a485acb3e1',
    title: 'Sea star',
    author: '@peterlaster',
  },
  {
    img: 'https://images.unsplash.com/photo-1589118949245-7d38baf380d6',
    title: 'Bike',
    author: '@southside_customs',
  },
];