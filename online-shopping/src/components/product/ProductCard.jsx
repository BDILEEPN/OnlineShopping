import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useCartContext } from "../../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart } = useCartContext();

  return (
    <Card sx={{ maxWidth: 300 }}>
      <CardContent>
        <Typography variant="h6">{product.title}</Typography>
        <Typography color="text.secondary">
          ₹ {product.price}
        </Typography>
      </CardContent>

      <CardActions>
        <Button
          size="small"
          component={Link}
          to={`/products/${product.id}`}
        >
          View
        </Button>
        <Button
          size="small"
          variant="contained"
          onClick={() => addToCart(product)}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
