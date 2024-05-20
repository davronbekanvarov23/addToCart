import { useLoaderData, Link } from "react-router-dom";

function ProductsList() {
  const { products } = useLoaderData();
  return (
    <ul>
      {products.map((product) => {
        return (
          <Link key={product.id} to={`/product/${product.id}`}>
            <li className="card shadow mb-3">
              <div className="card-body">{product.title}</div>
            </li>
          </Link>
        );
      })}
    </ul>
  );
}

export default ProductsList;
