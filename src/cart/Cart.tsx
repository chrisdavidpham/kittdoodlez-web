import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import cartStyle from './CartStyle';
import './Cart.css';

function Cart() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="cart">
      <Button onClick={() => setOpen(true)}>
        <ShoppingCartIcon fontSize="large" />
      </Button>
      <Modal
        open={open}
        onClose={() => setOpen(false)}
        sx={cartStyle}
      >
        <Box>
          <Typography variant="h2">
            Cart
          </Typography>
        </Box>
      </Modal>
    </div >
  );
}

export default Cart;
