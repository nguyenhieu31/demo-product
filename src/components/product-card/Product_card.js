import { useNavigate } from "react-router-dom";
function ProductCard({ product, ...props }) {
  const navigate = useNavigate();
  function handelSelect(id) {
    navigate(`/product/${id}`);
  }
  return (
    <div className="card" style={{ width: "18rem" }} onClick={() => { handelSelect(product.id) }}>
      <img src={`${product.image}`} className="card-img-top" loading="lazy" alt="..." />
      <div className="card-body">
        <p className="card-title">{product.color}</p>
        <p className="card-text">{product.name}</p>
        <h5 className="card-price">${product.price}.00</h5>
      </div>
    </div>
  )
}

export default ProductCard;