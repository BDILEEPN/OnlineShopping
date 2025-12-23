import {
  Container,
  Typography,
  IconButton,
  Button,
  Stack,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import useCart from "../hooks/useCart";

const Cart = () => {
  const {
    cartItems,
    removeFromCart,
    updateQty,
    totalPrice,
  } = useCart();

  if (cartItems.length === 0) {
    return (
      <Container sx={{ mt: 4 }}>
        <Typography variant="h5">Cart is empty</Typography>
      </Container>
    );
  }

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4" gutterBottom>
        Your Cart
      </Typography>

      {cartItems.map((item) => (
        <Stack
          key={item.id}
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: 2 }}
        >
          <Typography>
            {item.title} (₹{item.price})
          </Typography>

          <Stack direction="row" spacing={1}>
            <Button
              onClick={() =>
                updateQty(item.id, Math.max(1, item.qty - 1))
              }
            >
              -
            </Button>
            <Typography>{item.qty}</Typography>
            <Button
              onClick={() => updateQty(item.id, item.qty + 1)}
            >
              +
            </Button>
            <IconButton onClick={() => removeFromCart(item.id)}>
              <DeleteIcon />
            </IconButton>
          </Stack>
        </Stack>
      ))}

      <Typography variant="h6" sx={{ mt: 3 }}>
        Total: ₹ {totalPrice}
      </Typography>
    </Container>
  );
};

export default Cart;
