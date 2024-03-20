import axios from "axios";

const getProducts = async () => {
  const config = {
    method: "get",
    maxBodyLength: Infinity,
    url: `https://fakestoreapi.com/products/`,
  };
  try {
    const response = await axios.request(config);
    return response;
  } catch (error) {
    console.log("products", error);
  }
};

export default getProducts;
