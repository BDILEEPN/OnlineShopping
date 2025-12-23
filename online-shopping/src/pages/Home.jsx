import { Typography, Container } from "@mui/material";

const Home = () => {
  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h4">Welcome to Online Shopping</Typography>
      <Typography sx={{ mt: 2 }}>
        Buy products at best prices.
      </Typography>
    </Container>
  );
};

export default Home;
