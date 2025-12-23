import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Badge,
} from "@mui/material";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";

const Navbar = () => {
  const { totalItems } = useCart();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1 }}>
          Online Shopping
        </Typography>

        <Button color="inherit" component={Link} to="/">
          Home
        </Button>
        <Button color="inherit" component={Link} to="/products">
          Products
        </Button>
        <Button color="inherit" component={Link} to="/cart">
          <Badge badgeContent={totalItems} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
