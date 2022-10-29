import axios from "axios";
import { useEffect, useState } from "react";
function useProductPageDetail(id) {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    async function feckData() {
      await axios.get(`http://localhost:3004/Product/${id}`)
        .then((response) => {
          setProduct(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }
    feckData();
  }, [id]);
  return product;
}
export default useProductPageDetail;