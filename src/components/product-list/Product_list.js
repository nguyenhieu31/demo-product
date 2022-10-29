import '../product-list/Product_list.css';
import ProductCard from '../product-card/Product_card';
// import { useSelector } from 'react-redux'
import useProduct from '../../hook/useProduct'
import CardSkeleton from '../cartSkeleton/cartSkeleton';
import Box from "@mui/material/Box";
function ProductList() {
  const { data: products, loading } = useProduct();
  const list = products && products.map((product) => {
    return (
      // eslint-disable-next-line jsx-a11y/anchor-is-valid
      <a key={product.id} className="col-3">
        <div >
          <ProductCard product={product} />
        </div>
      </a>
    )
  })
  function renderLoading() {
    return (
      <Box
        sx={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
          justifyContent: "center",
          marginTop: "50px",
        }}
      >
        {[...Array.from(Array(10))].map((item) => {
          return <CardSkeleton key={item} />;
        })}
      </Box>
    )
  }
  return loading ? (renderLoading()) : (<div className="row no-gutter productList">{list}</div>);
}

export default ProductList;