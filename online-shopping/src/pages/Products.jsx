import { useEffect } from "react";
import { Container, Grid, Typography } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

import ProductCard from "../components/product/ProductCard";
import { products as fakeProducts } from "../services/productService";
import { setProducts, removeProducts,removeProductsById} from "../redux/slices/productSlice";
import useFetch from "../hooks/useFetch";

const Products = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.products.list);

  const fetchedProducts = useFetch(fakeProducts);

  const removeProductsHandler=()=>{
    dispatch(removeProducts([]));
  }
   const removeProductsByIdHandler=(id)=>{
    dispatch(removeProductsById(products.filter( (item)=>item.id!==id)));
  }

  useEffect(() => {
    dispatch(setProducts(fetchedProducts));
  }, [dispatch, fetchedProducts]);

  return (
    <Container sx={{ mt: 4 }}>
      <Typography variant="h3" gutterBottom>
        Products
      </Typography>
    <button onClick={removeProductsHandler}>Remove Products</button>
      <Grid container spacing={3}>
        
        {products.map((product) => (            
          <Grid item key={product.id} xs={12} sm={6} md={4}>            
            <ProductCard product={product} removeProductsByIdHandler={removeProductsByIdHandler} />            
          </Grid>
        ))}
        
      </Grid>
    </Container>
  );
};

export default Products;
