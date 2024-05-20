import { useSelector } from "react-redux";
import { FaTrash } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { removeProduct } from "../features/productSlice";
import { Link } from "react-router-dom";
import { useState } from "react";
function Cart() {
  const dispatch = useDispatch();
  const { products } = useSelector((state) => state.products);

  if (products.length == 0) {
    return (
      <div className=" mx-auto max-w-6xl flex flex-col  items-center gap-5">
        <h1 className=" text-2xl font-medium">
          Savatda hozircha mahsulot yo' q
        </h1>
        <p>
          Bosh sahifadagi to'plamlardan boshlang yoki kerakli mahsulotni qidiruv
          orqali toping
        </p>
        <Link className="btn btn-primary" to="/">
          Home
        </Link>
      </div>
    );
  } else {
    return (
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>
                <label>
                  <input type="checkbox" className="checkbox" />
                </label>
              </th>
              <th>Name/type</th>
              <th>Description</th>
              <th> Price</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {products.map((product) => {
              const [productAmount, setProductAmount] = useState(
                product.amount
              );

              const setAmount = (type) => {
                if (type == "decrease") {
                  setProductAmount((prev) => prev - 1);
                } else if (type == "increase") {
                  setProductAmount((prev) => prev + 1);
                }
              }
              return (
                <tr key={product.id}>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                          <img src={product.images} alt={product.title} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{product.title}</div>
                        <div className="text-sm opacity-50">
                          {product.category.name}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td>
                    <br />
                    <span>{product.description.substring(0, 150)}...</span>
                  </td>
                  <td>
                    <div className="  flex items-center flex-col  gap-2">
                      <h1 className=" text-xl ">
                        {new Intl.NumberFormat("us-US", {
                          currency: "USD",
                          style: "currency",
                        }).format(product.price * productAmount)}
                      </h1>
                      <div className="flex  items-center gap-1">
                        <button onClick={() => setAmount("increase")}>+</button>
                        <h3 className="w-4">{productAmount}</h3>
                        <button
                          onClick={() => setAmount("decrease")}
                          disabled={productAmount == 1 ? true : false}
                        >
                          -
                        </button>
                      </div>
                    </div>
                  </td>
                  <th>
                    <button
                      onClick={() => dispatch(removeProduct(product.id))}
                      className="btn btn-ghost btn-xs"
                    >
                      <FaTrash className=" w-5 h-5" />
                    </button>
                  </th>
                </tr>
              );
            })}
          </tbody>
          {/* foot */}
          <tfoot>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Job</th>
              <th>Favorite Color</th>
              <th></th>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

export default Cart;
