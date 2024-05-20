import { useLoaderData, Link } from "react-router-dom";

function ProductsList() {
  const { products } = useLoaderData();
  return (
    <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
      {products.map((product) => {
        return (
          <div
            key={product.id}
            className="card card-compact w-80 bg-base-100 shadow-xl"
          >
            <figure>
              <img src={product.images} alt={product.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{product.title}!</h2>
              <p >{product.description.substring(0,100)}...</p>
              <div className="card-actions justify-end">
                <Link to={`/product/${product.id}`} className="btn btn-primary">
                  Buy Now
                </Link>
              </div>
            </div>
          </div>
        );
      })}
    </ul>
  );
}

export default ProductsList;
