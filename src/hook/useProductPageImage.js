import axios from "axios";
import { useEffect, useState } from "react";
function useProductPageImage(id) {
  const [productImage, setProductImage] = useState([]);
  useEffect(() => {
    async function feckData() {
      await axios.get(`http://localhost:4000/image_product/${id}`)
        .then((response) => {
          setProductImage(response.data);
        })
        .catch((error) => {
          console.log(error.message);
        })
    }
    feckData();
  }, [id]);
  return productImage;
}
export default useProductPageImage;