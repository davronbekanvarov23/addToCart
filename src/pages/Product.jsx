import { useLoaderData } from "react-router-dom";
import { customFetch } from "../utils/index";
import { useState } from "react";

import { useDispatch } from "react-redux";
import { addProduct } from "../features/productSlice";

export const loader = async ({ params }) => {
  const req = await customFetch(`/products/${params.id}`);
  const product = req.data;
  return { product };
};

function Product() {
  const dispatch = useDispatch();
  const { product } = useLoaderData();
  const [productAmount, setProductAmount] = useState(1);

  const setAmount = (type) => {
    if (type == "decrease") {
      setProductAmount((prev) => prev - 1);
    } else if (type == "increase") {
      setProductAmount((prev) => prev + 1);
    }
  };

  const addToBag = () => {
    const newProduct = {
      ...product,
      amount: productAmount,
    };
    dispatch(addProduct(newProduct));
  };

  return (
    <>
      <div className="max-w-6xl mx-auto flex flex-col items-start">
        <h1 className=" text-3xl  font-bold ">{product.title}</h1>
        <div className="carousel carousel-center max-w-4xl w-full p-4 space-x-4 bg-neutral rounded-box">
          {product.images.map((image) => {
            return (
              <div key={image} className=" carousel-item">
                <img src={image} className=" rounded-box h-96" />
              </div>
            );
          })}
        </div>
        <div className=" flex items-center gap-2">
          <button
            onClick={() => setAmount("increase")}
            className="btn btn-secondary"
          >
            +
          </button>
          <h3>{productAmount}</h3>
          <button
            onClick={() => setAmount("decrease")}
            className="btn btn-secondary"
            disabled={productAmount == 1 ? true : false}
          >
            -
          </button>

          <hr />

          <button onClick={addToBag} className="btn btn-primary">Add to Bag</button>
        </div>
      </div>
    </>
  );
}

export default Product;
