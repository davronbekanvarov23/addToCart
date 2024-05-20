import { customFetch } from "../utils";

import ProductsList from "../components/ProductsList";

const url = "/products";

// loaders
export const loader = async () => {
  const req = await customFetch(url);
  const products = req.data;

  return { products };
};

function Home() {
  return (
    <div>
      <ProductsList />
    </div>
  );
}

export default Home;
